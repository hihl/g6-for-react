import Animate from './animate';
import QuickNet from './quickNet';
import CustomDraw from './customDraw';
import CustomAnchor from './customAnchor';
import CustomFlowEdge from './customFlowEdge';
import CustomInherit from './customInherit';
import CustomEnterLeave from './customEnterLeave';
import DefaultEdge from './defaultEdge';
import DefaultGroup from './defaultGroup';
import DefaultNode from './defaultNode';
import LayoutBase from './layoutBase';
import ViewportFocus from './viewportFocus';
import ViewportZoom from './viewportZoom';
import ViewportFitView from './viewportFitView';
import InteractionBehaviorMode from './interactionBehaviorMode';
import GraphChangeSize from './graphChangeSize';
import GraphZIndex from './graphZIndex';

export default {
  '基础': {
    '快速上手': QuickNet,
    '交互-模式与行为': InteractionBehaviorMode,
    '默认-边': DefaultEdge,
    '默认-群组': DefaultGroup,
    '默认-节点': DefaultNode,
    '动画': Animate,
    '图-更改画布尺寸': GraphChangeSize,
    '图-调整图层': GraphZIndex,
    '自定义-锚点': CustomAnchor,
    '自定义-绘制': CustomDraw,
    '自定义-流动效果线条': CustomFlowEdge,
    '自定义-继承': CustomInherit,
    '自定义-出入场动画': CustomEnterLeave,
    '布局-基础': LayoutBase,
    '视口-聚焦': ViewportFocus,
    '视口-缩放': ViewportZoom,
    '视口-自适应': ViewportFitView
  }
}