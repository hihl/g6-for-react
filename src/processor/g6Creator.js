import G6 from '@antv/g6';

export default {
  createGraph(config) {
    const graphConfig = config.graph;
    const graph = new G6.Graph(graphConfig.props);
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
