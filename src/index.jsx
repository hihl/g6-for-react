import G6, { Shape } from '@antv/g6';
import Util from './shared/util';
import * as components from './components';
require('@antv/g6/build/plugins');

const ReactG6 = Util.mix(components, {
  G6,
  Util,
  Shape,
  track(enable = false) {
    G6.Global.track(enable);
  }
});

exports.default = ReactG6;
module.exports = ReactG6;
