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
    this.mergeLayout(config);
    this.mergeNodeMapping(config);
    this.mergeEdgeMapping(config);
    this.mergeGroupMapping(config);
  },

  mergeGraph(config, clear) {
    if (config.graph && config.graph.updateProps) {
      config.graph.props = config.graph.updateProps;
    }
    if (clear) {
      delete config.graph.g6Instance;
    }
  },

  mergeLayout(config) {
    if (config.layout && config.layout.updateProps) {
      config.layout.props = config.layout.updateProps;
    }
  },

  mergeNodeMapping(config) {
    if (config.nodeMapping && config.nodeMapping.updateProps) {
      config.nodeMapping.props = config.nodeMapping.updateProps;
    }
  },

  mergeEdgeMapping(config) {
    if (config.edgeMapping && config.edgeMapping.updateProps) {
      config.edgeMapping.props = config.edgeMapping.updateProps;
    }
  },

  mergeGroupMapping(config) {
    if (config.groupMapping && config.groupMapping.updateProps) {
      config.groupMapping.props = config.groupMapping.updateProps;
    }
  }
}
