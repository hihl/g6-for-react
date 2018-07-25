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
    this.mergeNodeMapper(config);
    this.mergeEdgeMapper(config);
    this.mergeGroupMapper(config);
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

  mergeNodeMapper(config) {
    if (config.nodeMapper && config.nodeMapper.updateProps) {
      config.nodeMapper.props = config.nodeMapper.updateProps;
    }
  },

  mergeEdgeMapper(config) {
    if (config.edgeMapper && config.edgeMapper.updateProps) {
      config.edgeMapper.props = config.edgeMapper.updateProps;
    }
  },

  mergeGroupMapper(config) {
    if (config.groupMapper && config.groupMapper.updateProps) {
      config.groupMapper.props = config.groupMapper.updateProps;
    }
  },

  deleteNodeMapper(config) {
    if (!config) {
      return;
    }
    delete config.nodeMapper;
  },

  deleteEdgeMapper(config) {
    if (!config) {
      return;
    }
    delete config.edgeMapper;
  },

  deleteGroupMapper(config) {
    if (!config) {
      return;
    }
    delete config.groupMapper;
  }
}
