// import warning from 'warning';
import { Util } from '../shared';
// import g6Creator from './g6Creator';
import _ from 'lodash';

export default {
  needRebuildGraph(config) {
    if (!config.graph.props || !config.graph.updateProps) {
      return false;
    }
    const graphProps = config.graph.props;
    const nextGraphProps = config.graph.updateProps;

    if (!Util.shallowEqual(graphProps.fitView, nextGraphProps.fitView) || !Util.shallowEqual(graphProps.fitViewPadding, nextGraphProps.fitViewPadding)
    ) {
      return true;
    }

    return false;
  },

  synchronizeG6GraphUpdate(graph, graphConfig) {
    this.updateGraph(graph, graphConfig.graph);
  },

  updateGraph(graph, graphConfig) {
    if (!graphConfig) {
      return;
    }

    const { props, updateProps: nextProps } = graphConfig;
    const { width, height, animate, data } = props;
    const { width: nextWidth, height: nextHeight, animate: nextAnimate, data: nextData } = nextProps;

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
  }
}
