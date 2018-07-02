import Util from '../shared/util';
import configAdd from './configAdd';

export default class Processor {
  constructor() {
    this.config = {};
    this.elementInfos = {};
    this.initedG6 = false;
    this.added = false;
    this.updated = false;
    this.deleted = false;
    this.deleteInfos = {};
  }

  calUpdateFlag(name, id) {
    /* eslint-disable  no-unused-vars */
    const { children, ...props } = this.elementInfos[id].props;
    const { children: nextChildren, ...nextProps } = this.elementInfos[id].updateProps;
    /* eslint-enable */
    if (name === 'Graph' || name === 'Tree') {
      const { data, ...otherProps } = props;
      const { data: nextData, ...nextOtherProps } = nextProps;
      if (data !== nextData || !Util.isEqual(otherProps, nextOtherProps)) {
        this.updated = true;
      }
    } else {
      if (!Util.isEqual(props, nextProps)) {
        this.updated = true;
      }
    }
  }

  addElement(name, id, props, parentInfo) {
    if (!this.instance && this.initedG6) {
      return;
    }
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

  updateElement(name, id, props) {
    this.elementInfos[id].updateProps = { ...props };
    this.calUpdateFlag(name, id);
  }

  destory() {
    this.instance.destroy();
    this.instance = null;
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
}
