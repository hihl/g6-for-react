const reExecuteDeleteElements = {
  NodeMapper: true,
  EdgeMapper: true,
  GroupMapper: true,
  Group: true,
  Plugin: true
};

export default {
  needReExecute(deleteInfos, elementInfos) {
    for (const id in deleteInfos) {
      if (reExecuteDeleteElements[elementInfos[id].name]) {
        return true;
      }
    }

    return false;
  },

  synchronizeG6Delete(graph, config, deleteInfos, elementInfos) {
    Object.keys(deleteInfos).forEach((id) => {
      const funName = `delete${elementInfos[id].name}`;
      if (this[funName] && !elementInfos[id].viewId) {
        this[funName](graph, config, id);
      }
    });
  }
};
