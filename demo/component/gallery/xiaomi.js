import * as d3 from 'd3';
import React from 'react';
import { Graph, G6, NodeMapper, EdgeMapper } from 'g6-for-react';
import data from './xiaomi.json';
require('@antv/g6/build/plugin.tool.d3.mapper');

const { forceSimulation, forceLink, forceManyBody, forceX, forceY, forceCollide } = d3;

const Mapper = G6.Plugins['tool.d3.mapper'];
const nodeSizeMapper = new Mapper('node', 'degree', 'size', [8, 48], {
  legendCfg: null
});
const nodeColorMapper = new Mapper('node', 'type', 'color', ['#e18826', '#002a67']);

export default class XiaoMi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  layout = (nodes, edges, graph) => {
    if (this.simulation) {
      this.simulation.alphaTarget(0.3).restart();
    } else {
      this.simulation = forceSimulation(nodes).force('charge', forceManyBody().strength(-100)).force('link', forceLink(edges).id(function(model) {
        return model.id;
      })).force('collision', forceCollide().radius(model => model.size / 2 * 1.2)).force('y', forceY()).force('x', forceX()).on('tick', function() {
        graph.updateNodePosition();
      });
    }
  }

  // 鼠标移入节点显示 label
  tryHideLabel = node => {
    const model = node.getModel();
    const label = node.getLabel();
    const labelBox = label.getBBox();
    if (labelBox.maxX - labelBox.minX > model.size) {
      label.hide();
      this.graph.draw();
    }
  }

  resetState = () => {
    if (this.subject) {
      this.simulation.alphaTarget(0);
      this.subject.fx = null;
      this.subject.fy = null;
      this.subject = null;
    }
  };

  onMousedown = ev => {
    if (ev.domEvent.button === 0) {
      this.subject = this.simulation.find(ev.x, ev.y);
    }
  };

  onDragstart = () => {
    this.subject && this.simulation.alphaTarget(0.3).restart();
  };

  onDrag = ev => {
    if (this.subject) {
      this.subject.fx = ev.x;
      this.subject.fy = ev.y;
    }
  };

  onNodeMouseenter = ev => {
    const item = ev.item;
    this.graph.toFront(item);
    item.getLabel().show();
    this.graph.draw();
  };

  onNodeMouseleave = ev => {
    const item = ev.item;
    this.tryHideLabel(item);
  };

  render() {
    return (
      <div className="graph">
        <div className="graph-basic" style={{ background: '#0F141F' }}>
          <Graph
            height={window.innerHeight}
            data={this.state.data}
            plugins={[nodeSizeMapper, nodeColorMapper]}
            modes={{
              default: ['rightPanCanvas']
            }}
            layout={this.layout}
            onGetG6Instance={graph => this.graph = graph}
            onMousedown={this.onMousedown}
            onDragstart={this.onDragstart}
            onDrag={this.onDrag}
            onMouseup={this.resetState}
            onCanvasMouseleave={this.resetState}
            onNodeMouseenter={this.onNodeMouseenter}
            onNodeMouseleave={this.onNodeMouseleave}
          >
            <NodeMapper 
              style={model => model.type === 'Company' ? {
                fill: '#e18826',
                shadowColor: 'rgba(0,0,0, 0.3)',
                shadowBlur: 3,
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                stroke: null
              } : {
                fill: '#002a67',
                shadowColor: 'rgba(0,0,0, 0.3)',
                shadowBlur: 3,
                shadowOffsetX: 3,
                shadowOffsetY: 5,
                stroke: null
              }}
              label={model => ({
                text: model.properties['name'],
                stroke: null,
                fill: '#fff'
              })}
            />
            <EdgeMapper 
              style={() => ({
                stroke: '#b3b3b3',
                lineWidth: 2
              })}
            />
          </Graph>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.graph.translate(this.graph.getWidth() / 2, this.graph.getHeight() / 2);
    const nodes = this.graph.getNodes();
    const edges = this.graph.getEdges();

    edges.forEach(edge => {
      edge.getGraphicGroup().set('capture', false); // 移除边的捕获，提升图形拾取效率
    });

    nodes.forEach(node => {
      this.tryHideLabel(node);
    });
  }

  componentWillUnmount() {
    this.simulation.stop();
    this.simulation = null;
  }
}