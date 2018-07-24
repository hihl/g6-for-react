import G6 from '@antv/g6';

export default {
  createGraph(config) {
    const graphConfig = config.graph;
    const cfg = graphConfig.props;
    const layoutCfg = config.layout;
    if (layoutCfg) { // 布局初始化
      cfg.layout = layoutCfg.props;
    }
    const graph = new G6.Graph(cfg);
    graphConfig.g6Instance = graph;
    return graph;
  },

  executeGraphConfig(graph, config) {
    const nodeMappingCfg = config.nodeMapping;
    if (nodeMappingCfg) {
      graph.node(nodeMappingCfg.props);
    }
    const edgeMappingCfg = config.edgeMapping;
    if (edgeMappingCfg) {
      graph.edge(edgeMappingCfg.props);
    }
    const groupMappingCfg = config.groupMapping;
    if (groupMappingCfg) {
      graph.group(groupMappingCfg.props);
    }
  }
}
