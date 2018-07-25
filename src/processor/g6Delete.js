const reExecuteDeleteElements = {
  NodeMapping: true,
  EdgeMapping: true,
  GroupMapping: true,
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

  synchronizeG6Delete(chart, config, deleteInfos, elementInfos) {
    Object.keys(deleteInfos).forEach((id) => {
      const funName = deleteFuncMap[elementInfos[id].name];
      if (this[funName] && !elementInfos[id].viewId) {
        this[funName](chart, config, id);
      }
    });
  }
};
