import G6 from '@antv/g6';
// import { Util } from '../shared';

export default {
  createGraph(config) {
    const graphConfig = config.graph;
    const graph = new G6.Graph(graphConfig.props);
    graphConfig.g6Instance = graph;
    return graph;
  },

  executeGraphConfig(graph, config) {
    // const graphConfig = config.graph;
    // const props = graph.props;
  },

  synchronizeG6Add() {

  }
}
