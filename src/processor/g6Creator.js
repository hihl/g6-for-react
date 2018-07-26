import G6 from '@antv/g6';
import EventUtil from './event';
import _ from 'lodash';

export default {
  createGraph(config) {
    const graphConfig = config.graph;
    const cfg = graphConfig.props;
    const layoutCfg = config.layout;
    if (layoutCfg) { // 布局初始化
      cfg.layout = layoutCfg.props;
    }
    const graph = new G6.Graph(cfg);
    graph.dataSource = _.cloneDeep(cfg.data);
    graphConfig.g6Instance = graph;
    return graph;
  },

  executeGraphConfig(graph, config) {
    const graphCfg = config.graph;
    if (graphCfg && graphCfg.style) {
      graph.css(graphCfg.style);
    }
    const nodeMapperCfg = config.nodeMapper;
    if (nodeMapperCfg) {
      graph.node(nodeMapperCfg.props);
    }
    const edgeMapperCfg = config.edgeMapper;
    if (edgeMapperCfg) {
      graph.edge(edgeMapperCfg.props);
    }
    const groupMapperCfg = config.groupMapper;
    if (groupMapperCfg) {
      graph.group(groupMapperCfg.props);
    }

    if (graphCfg) {
      EventUtil.bindEvents(graph, EventUtil.graphEvents, graphCfg.props);
    }
  }
}
