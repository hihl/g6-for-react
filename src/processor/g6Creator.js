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

  executeConfig(instance, config) {
    const nodeMapperCfg = config.nodeMapper;
    if (nodeMapperCfg) {
      instance.node(nodeMapperCfg.props);
    }
    const edgeMapperCfg = config.edgeMapper;
    if (edgeMapperCfg) {
      instance.edge(edgeMapperCfg.props);
    }
    const groupMapperCfg = config.groupMapper;
    if (groupMapperCfg) {
      instance.group(groupMapperCfg.props);
    }
  },

  executeGraphConfig(graph, config) {
    const graphCfg = config.graph;
    if (graphCfg && graphCfg.css) {
      graph.css(graphCfg.css);
    }
    this.executeConfig(graph, config);
    if (graphCfg) {
      EventUtil.bindEvents(graph, EventUtil.graphEvents, graphCfg.props);
    }
  },

  createTree(config) {
    const treeConfig = config.tree;
    const cfg = treeConfig.props;
    if (layoutCfg) { // 布局初始化
      cfg.layout = layoutCfg.props;
    }
    const tree = new G6.Tree(cfg);
    tree.dataSource = _.cloneDeep(cfg.data);
    treeConfig.g6Instance = tree;
    return tree;
  },

  executeTreeConfig(tree, config) {
    const treeCfg = config.tree;
    if (treeCfg && treeCfg.css) {
      tree.css(treeCfg.css);
    }
    this.executeConfig(tree, config);
    if (treeCfg) {
      EventUtil.bindEvents(tree, EventUtil.treeEvents, treeCfg.props);
    }
  }
}
