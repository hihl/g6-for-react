const iAdd = {
  addElement(name, config, elemInfo) {
    this[`add${name}`](config, elemInfo, elemInfo.id, elemInfo.parentInfo);
  },

  getConfigContainer(config) {
    return config;
  },

  addUniqueElement(config, name, elemInfo, id) {
    const configContainer = this.getConfigContainer(config);

    configContainer[name] = elemInfo;

    return id;
  },

  addGraph(config, elemInfo, id) {
    return this.addUniqueElement(config, 'graph', elemInfo, id, null);
  }
};

export default iAdd;
