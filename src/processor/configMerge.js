export default {
  merge(config, deleteInfos, elementInfos, clear) {
    this.mergeDelete(config, deleteInfos, elementInfos);
    this.mergeUpdate(config, clear);
  },

  mergeDelete(config, deleteInfos, elementInfos) {
    Object.keys(deleteInfos).forEach(id => {
      const funName = `delete${elementInfos[id].name}`;
      if (this[funName]) {
        this[funName](config, id, elementInfos[id].parentInfo.id);
      }
    });
  },

  mergeUpdate(config, clear) {
    this.mergeGraph(config, clear);
  },

  mergeGraph(config, clear) {
    if (config.graph && config.graph.updateProps) {
      config.graph.props = config.graph.updateProps;
    }
    if (clear) {
      delete config.graph.g6Instance;
    }
  }
}
