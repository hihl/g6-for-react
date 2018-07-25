import { Util } from '@antv/g6';

function length(obj) {
  if (Util.isArray(obj)) {
    return obj.length;
  } else if (Util.isObject(obj)) {
    return Object.keys(obj).length;
  }

  return 0;
}

export default Util.mix({}, Util, {
  shallowEqual(objA, objB, compare, compareContext) {
    let ret = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (ret !== void 0) {
      return !!ret;
    }
    if (objA === objB) {
      return true;
    }
    if (typeof objA === 'function' && typeof objB === 'function') {
      return objA.toString() === objB.toString();
    }
    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
      return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for (let idx = 0; idx < keysA.length; idx++) {
      const key = keysA[idx];
      if (!bHasOwnProperty(key)) {
        return false;
      }
      const valueA = objA[key];
      const valueB = objB[key];
      if (typeof valueA === 'function' && typeof valueB === 'function') {
        ret = valueA.toString() === valueB.toString();
        if (!ret) {
          return false;
        }
        continue;
      }
      ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
      if (ret === false || (ret === void 0 && valueA !== valueB)) {
        return false;
      }
    }
    return true;
  },

  without(objA, keys = []) {
    const ret = {};
    Util.each(objA, (v, k) => {
      if (Util.indexOf(keys, k) === -1) {
        ret[k] = v;
      }
    });
    return ret;
  },

  length
});
