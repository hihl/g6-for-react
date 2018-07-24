import g6Creator from './g6Creator';
import configAdd from './configAdd';

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
}
