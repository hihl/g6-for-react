export default {
  addElement(name, config, elementInfo) {
    this[`add${name}`](config, elementInfo, elementInfo.id, elementInfo.parentInfo);
  },

  addUniqueElement(config, name, elementInfo, id) {
    const configContainer = config;

    configContainer[name] = elementInfo;

    return id;
  },

  addGraph(config, elementInfo, id) {
    return this.addUniqueElement(config, 'graph', elementInfo, id);
  },

  addTree(config, elementInfo, id) {
    return this.addUniqueElement(config, 'tree', elementInfo, id);
  },

  addLayout(config, elementInfo, id) {
    return this.addUniqueElement(config, 'layout', elementInfo, id);
  },

  addNodeMapper(config, elementInfo, id) {
    return this.addUniqueElement(config, 'nodeMapper', elementInfo, id);
  },

  addEdgeMapper(config, elementInfo, id) {
    return this.addUniqueElement(config, 'edgeMapper', elementInfo, id);
  },

  addGroupMapper(config, elementInfo, id) {
    return this.addUniqueElement(config, 'groupMapper', elementInfo, id);
  }
}
