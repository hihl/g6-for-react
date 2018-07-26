import React from 'react';
import { Graph } from 'g6-for-react';

const width = window.innerWidth;
const height = window.innerHeight;

export default class InteractionDragNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [{
          id: 'node1',
          x: 100,
          y: 200
        }, {
          id: 'node2',
          x: 300,
          y: 200
        }],
        edges: [{
          id: 'edge1',
          target: 'node2',
          source: 'node1'
        }]
      }
    };
  }

  onNodeDragstart = ev => {
    const item = ev.item;

    const model = item.getModel();
    this.node = item;
    this.dx = model.x - ev.x;
    this.dy = model.y - ev.y;
  };

  onNodeDrag = ev => {
    this.node && this.graph.update(this.node, {
      x: ev.x + this.dx,
      y: ev.y + this.dy
    });
  };

  onNodeDragend = () => {
    this.node = undefined;
  };

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph 
            width={width} 
            height={height} 
            data={this.state.data} 
            onGetG6Instance={graph => this.graph = graph}
            onNodeDragstart={this.onNodeDragstart}
            onNodeDrag={this.onNodeDrag}
            onNodeDragend={this.onNodeDragend}
          />
        </div>
      </div>
    );
  }
}
