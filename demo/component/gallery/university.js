import * as d3 from 'd3';
import React from 'react';
import { Tree, G6, NodeMapper, EdgeMapper } from 'g6-for-react';
import data from './university.json';
require('@antv/g6/build/plugin.tool.d3.mapper');

const { forceSimulation, forceLink, forceManyBody, forceY } = d3;
const Util = G6.Util;

const Mapper = G6.Plugins['tool.d3.mapper'];
const nodeSizeMapper = new Mapper('node', '办学层次', 'color', ['#4BA4C4', '#F0D79F', '#FF8B33']);

export default class University extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  layout = (...args) => {
    const [,tree] = args;
    const nodes = tree.getNodes().map(function(node) {
      return node.getModel();
    });
    const edges = tree.getEdges().map(function(edge) {
      return Util.mix({}, edge.getModel());
    });
    this.simulation && this.simulation.stop();
    this.simulation = forceSimulation(nodes).force('charge', forceManyBody()).force('link', forceLink(edges).id(function(d) {
      return d.id;
    }).distance(20).strength(1)).force('y', forceY()).on('tick', function() {
      tree.updateNodePosition();
    });
  }

  // 鼠标移入节点显示 label
  tryHideLabel = node => {
    const model = node.getModel();
    const label = node.getLabel();
    const labelBox = label.getBBox();
    if (labelBox.maxX - labelBox.minX > model.size) {
      label.hide();
      this.tree.draw();
    }
  }

  onDragstart = () => {
    this.tree.css({
      cursor: '-webkit-grabbing'
    });
  };

  onDrag = ev => {
    if (this.lastPoint) {
      this.tree.translate(ev.domX - this.lastPoint.x, ev.domY - this.lastPoint.y);
    }
    this.lastPoint = {
      x: ev.domX,
      y: ev.domY
    };
  };

  onDragend = () => {
    this.lastPoint = undefined;
    this.tree.css({
      cursor: '-webkit-grab'
    });
  };

  onCanvasMouseenter = () => {
    this.tree.css({
      cursor: '-webkit-grabbing'
    });
  };

  onCanvasMouseleave = () => {
    this.lastPoint = undefined;
  };

  onNodeMouseenter = ev => {
    const item = ev.item;
    this.tree.toFront(item);
    item.getLabel().show();
    this.tree.draw();
  };

  onNodeMouseleave = ev => {
    const item = ev.item;
    this.tryHideLabel(item);
  };

  render() {
    return (
      <div className="graph">
        <div className="graph-basic" style={{ background: '#0F141F' }}>
          <Tree
            height={window.innerHeight}
            data={this.state.data}
            plugins={[nodeSizeMapper]}
            layout={this.layout}
            onGetG6Instance={tree => this.tree = tree}
            onDragstart={this.onDragstart}
            onDrag={this.onDrag}
            onDragend={this.onDragend}
            onCanvasMouseleave={this.onCanvasMouseleave}
            onCanvasMouseenter={this.onCanvasMouseenter}
            onNodeMouseenter={this.onNodeMouseenter}
            onNodeMouseleave={this.onNodeMouseleave}
          >
            <NodeMapper 
              style={() => ({
                stroke: null
              })}
              size={10}
              label={model => model.name}
            />
            <EdgeMapper 
              style={() => ({
                strokeOpacity: 0.6
              })}
            />
          </Tree>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.tree.translate(this.tree.getWidth() / 2, this.tree.getHeight() / 2);
    const nodes = this.tree.getNodes();

    nodes.forEach(node => {
      this.tryHideLabel(node);
    });
  }
}