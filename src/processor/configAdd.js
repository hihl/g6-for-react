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

  addNodeMapping(config, elementInfo, id) {
    return this.addUniqueElement(config, 'nodeMapping', elementInfo, id);
  },

  addEdgeMapping(config, elementInfo, id) {
    return this.addUniqueElement(config, 'edgeMapping', elementInfo, id);
  },

  addGroupMapping(config, elementInfo, id) {
    return this.addUniqueElement(config, 'groupMapping', elementInfo, id);
  },

  addLayout(config, elementInfo, id) {
    return this.addUniqueElement(config, 'layout', elementInfo, id);
  }
}
