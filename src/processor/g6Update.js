import { Util } from '../shared';
import _ from 'lodash';
import EventUtil from './event';

export default {
  needRebuildGraph(config) {
    if (!config.graph.props || !config.graph.updateProps) {
      return false;
    }
    const graphProps = config.graph.props;
    const nextGraphProps = config.graph.updateProps;
    if (
      !_.isEqual(graphProps.fitViewPadding, nextGraphProps.fitViewPadding) ||
      !_.isEqual(graphProps.minZoom, nextGraphProps.minZoom) ||
      !_.isEqual(graphProps.maxZoom, nextGraphProps.maxZoom) ||
      !_.isEqual(graphProps.modes, nextGraphProps.modes) ||
      !_.isEqual(graphProps.plugins, nextGraphProps.plugins) ||
      config.nodeMapper && !Util.shallowEqual(config.nodeMapper.props, config.nodeMapper.updateProps) ||
      config.edgeMapper && !Util.shallowEqual(config.edgeMapper.props, config.edgeMapper.updateProps) ||
      config.groupMapper && !Util.shallowEqual(config.groupMapper.props, config.groupMapper.updateProps)
    ) {
      return true;
    }

    return false;
  },

  synchronizeG6GraphUpdate(graph, config) {
    this.updateGraph(graph, config.graph);
    this.updateLayout(graph, config.layout);
  },

  updateGraph(graph, graphConfig) {
    if (!graphConfig) {
      return;
    }

    const { props, updateProps: nextProps } = graphConfig;
    const { width, height, animate, data, mode, fitView, style } = props;
    const { width: nextWidth, height: nextHeight,
      animate: nextAnimate, data: nextData, mode: nextMode,
      fitView: nextFitView, style: nextStyle, forceFit
    } = nextProps;

    // 更新群组
    this.addGraphItem(graph, 'group', data.groups, nextData.groups);
    this.removeGraphItem(graph, data.groups, nextData.groups);
    this.updateGraphItem(graph, data.groups, nextData.groups);
    // 更新接点
    this.addGraphItem(graph, 'node', data.nodes, nextData.nodes);
    this.removeGraphItem(graph, data.nodes, nextData.nodes);
    this.updateGraphItem(graph, data.nodes, nextData.nodes);
    // 更新连线
    this.addGraphItem(graph, 'edge', data.edges, nextData.edges);
    this.removeGraphItem(graph, data.edges, nextData.edges);
    this.updateGraphItem(graph, data.edges, nextData.edges);
    // 更新导引
    this.addGraphItem(graph, 'guide', data.guides, nextData.guides);
    this.removeGraphItem(graph, data.guides, nextData.guides);
    this.updateGraphItem(graph, data.guides, nextData.guides);

    if (animate !== nextAnimate) {
      graph.set('animate', nextAnimate);
    }

    if (width !== nextWidth && height !== nextHeight) {
      graph.changeSize(nextWidth, nextHeight);
    } else if (width !== nextWidth) {
      graph.changeSize(nextWidth, graph.getHeight());
    } else if (height !== nextHeight) {
      graph.changeSize(graph.getWidth(), nextHeight);
    }

    if (mode !== nextMode) {
      graph.changeMode(nextMode);
    }

    if (forceFit || fitView !== nextFitView) {
      graph.setFitView(nextFitView);
    }

    if (!_.isEqual(style, nextStyle)) {
      graph.css(nextStyle);
    }

    EventUtil.updateEvents(graph, EventUtil.graphEvents, props, nextProps);
  },

  addGraphItem(graph, type, data, nextData) {
    const paddings = _.differenceBy(nextData, data, 'id');
    paddings.forEach(item => {
      graph.add(type, item);
    });
  },

  removeGraphItem(graph, data, nextData) {
    const paddings = _.differenceBy(data, nextData, 'id');
    paddings.forEach(item => {
      graph.remove(item.id);
    });
  },

  updateGraphItem(graph, data, nextData) {
    const paddings = _.intersectionBy(nextData, data, 'id');
    paddings.forEach(item => {
      graph.update(item.id, item);
    });
  },

  updateLayout(instance, layoutConfig) {
    if (!layoutConfig) {
      return;
    }
    const { props, updateProps: nextProps } = layoutConfig;
    if (!!nextProps.processer && props.processer !== nextProps.processer && props.processer.toString() !== nextProps.processer.toString()) {
      instance.changeLayout(layoutConfig.updateProps.processer);
    }
  },

  needRebuildTree(config) {
    if (!config.tree.props || !config.tree.updateProps) {
      return false;
    }
    const treeProps = config.tree.props;
    const nextTreeProps = config.tree.updateProps;
    if (
      !_.isEqual(treeProps.fitViewPadding, nextTreeProps.fitViewPadding) ||
      !_.isEqual(treeProps.minZoom, nextTreeProps.minZoom) ||
      !_.isEqual(treeProps.maxZoom, nextTreeProps.maxZoom) ||
      !_.isEqual(treeProps.modes, nextTreeProps.modes) ||
      !_.isEqual(graphProps.plugins, nextTreeProps.plugins) ||
      config.nodeMapper && !Util.shallowEqual(config.nodeMapper.props, config.nodeMapper.updateProps) ||
      config.edgeMapper && !Util.shallowEqual(config.edgeMapper.props, config.edgeMapper.updateProps) ||
      config.groupMapper && !Util.shallowEqual(config.groupMapper.props, config.groupMapper.updateProps)
    ) {
      return true;
    }

    return false;
  },

  synchronizeG6TreeUpdate(tree, config) {
    this.updateTree(tree, config.tree);
    this.updateLayout(tree, config.layout);
  },

  updateTree(tree, treeConfig) {
    if (!treeConfig) {
      return;
    }

    const { props, updateProps: nextProps } = treeConfig;
    const { width, height, animate, data, mode, fitView, style } = props;
    const { width: nextWidth, height: nextHeight,
      animate: nextAnimate, data: nextData, mode: nextMode,
      fitView: nextFitView, style: nextStyle, forceFit
    } = nextProps;

    if (animate !== nextAnimate) {
      tree.set('animate', nextAnimate);
    }

    if (width !== nextWidth && height !== nextHeight) {
      tree.changeSize(nextWidth, nextHeight);
    } else if (width !== nextWidth) {
      tree.changeSize(nextWidth, tree.getHeight());
    } else if (height !== nextHeight) {
      tree.changeSize(tree.getWidth(), nextHeight);
    }

    if (mode !== nextMode) {
      tree.changeMode(nextMode);
    }

    if (forceFit || fitView !== nextFitView) {
      tree.setFitView(nextFitView);
    }

    if (!_.isEqual(style, nextStyle)) {
      tree.css(nextStyle);
    }

    if (!_.isEqual(data, nextData)) {
      tree.source(nextData);
      tree.reRender();
    }

    EventUtil.updateEvents(tree, EventUtil.treeEvents, props, nextProps);
  }
}
