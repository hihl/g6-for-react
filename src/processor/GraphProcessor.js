import g6Creator from './g6Creator';
import g6Update from './g6Update';
// import g6Delete from './g6Delete';
import configAdd from './configAdd';
import configMerge from './configMerge';
import _ from 'lodash';

export default class GraphProcessor {
  constructor() {
    this.config = {};
    this.elementInfos = {};
    this.added = false;
    this.mounted = false;
    this.updated = false;
    this.deleted = false;
    this.deleteInfos = {};
    this.instanceType = 'graph';
  }

  createInstance() {
    if (this.mounted) {
      return;
    }
    const config = this.config;
    const graph = g6Creator.createGraph(config, this.elementInfos);
    g6Creator.executeGraphConfig(graph, config);
    graph.read(config.graph.props.data);

    this.instance = graph;
    this.mounted = true;
    this.resetStates();
    return this.instance;
  }

  destroy() {
    this.instance.destroy();
    this.instance = null;
    this.mounted = false;
  }

  resetStates() {
    const elems = this.elementInfos;
    for (const id in elems) {
      if (elems[id].updateProps) delete elems[id].updateProps;
      if (this.deleteInfos[id]) {
        delete elems[id];
      }
    }
    this.added = false;
    this.updated = false;
    this.deleteInfos = {};
  }

  addElement(name, id, props, parentInfo) {
    this.added = true;
    this.elementInfos[id] = {
      id,
      parentInfo,
      name,
      props
    };
    if (parentInfo && !this.elementInfos[parentInfo.id]) {
      this.elementInfos[parentInfo.id] = {
        id: parentInfo.id,
        name: parentInfo.name
      };
    }
    configAdd.addElement(name, this.config, this.elementInfos[id]);
  }

  calUpdateFlag(name, id) {
    /* eslint-disable  no-unused-vars */
    const { children, ...props } = this.elementInfos[id].props;
    const { children: nextChildren, ...nextProps } = this.elementInfos[id].updateProps;
    /* eslint-enable */
    if (name === 'Graph') {
      const { data, container, ...otherProps } = props;
      const { data: nextData, container: nextContainer, ...nextOtherProps } = nextProps;
      if (!_.isEqual(data, nextData) || !_.isEqual(otherProps, nextOtherProps)) {
        this.updated = true;
      }
    } else {
      if (!_.isEqual(props, nextProps)) {
        this.updated = true;
      }
    }
  }

  updateElement(name, id, props) {
    this.elementInfos[id].updateProps = { ...props };
    this.calUpdateFlag(name, id);
  }

  deleteElement(name, id) {
    if (!this.instance) return;

    this.deleteInfos[id] = id;
    this.deleted = true;
  }

  batchedUpdate() {
    if (!this.instance) {
      return null;
    }

    if (g6Update.needRebuildGraph(this.config)) {
      configMerge.merge(this.config, this.deleteInfos, this.elementInfos, true);
      this.instance.destroy();
      this.mounted = false;
      return this.createInstance();
    }

    if (this.deleted) {
      configMerge.mergeDelete(this.config, this.deleteInfos, this.elementInfos);
    }

    configMerge.mergeUpdate(this.config, false);
    this.resetStates();

    return this.instance;
  }
}
