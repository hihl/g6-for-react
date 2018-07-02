// import { Util } from '../shared';

const reExecuteDeleteElements = {
  Node: true,
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
  }
};
