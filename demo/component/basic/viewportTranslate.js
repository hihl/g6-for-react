import React from 'react';
import { Graph } from 'g6-for-react';

const width = window.innerWidth;
const height = window.innerHeight;

export default class ViewportTranslate extends React.Component {
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

  onDrag = ev => {
    if (this.lastPoint) {
      this.graph.translate(ev.domX - this.lastPoint.x, ev.domY - this.lastPoint.y);
    }
    this.lastPoint = {
      x: ev.domX,
      y: ev.domY
    };
  };

  onDragend = () => {
    this.lastPoint = undefined;
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
            onDrag={this.onDrag}
            onDragend={this.onDragend}
          />
        </div>
      </div>
    );
  }
}
