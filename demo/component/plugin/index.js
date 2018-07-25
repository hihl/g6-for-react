import QuadraticCurve from './quadraticCurve';
import Minimap from './minimap';
import MaxSpanningForest from './maxSpanningForest';
import Circle from './circle';
import ArchimeddeanSpiral from './archimeddeanSpiral';

export default {
  '插件': {
    '阿基米德螺线': ArchimeddeanSpiral,
    '二阶贝塞尔曲线': QuadraticCurve,
    '缩略图': Minimap,
    '最大生成森林': MaxSpanningForest,
    '圆形布局': Circle
  }
}
