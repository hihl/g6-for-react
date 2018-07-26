import React from 'react';
import { Graph, NodeMapper } from 'g6-for-react';

const nodes = [];
const width = window.innerWidth;
const height = window.innerHeight;
const num = 500;
for (let index = 0; index < num; index++) {
  nodes.push({
    x: width * Math.random(),
    y: height * Math.random()
  });
}

export default class GraphZIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes
      }
    };
  }

  onNodeMouseenter = e => {
    const item = e.item;
    this.graph.toFront(item);
    this.graph.update(item, {
      style: {
        fill: 'red'
      }
    });
  };

  onNodeMouseleave = e => {
    const item = e.item;
    this.graph.toBack(item);
    this.graph.update(item, {
      style: {
        fill: '#1890FF'
      }
    });
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
            onNodeMouseenter={this.onNodeMouseenter}
            onNodeMouseleave={this.onNodeMouseleave}
          >
            <NodeMapper style={{ fillOpacity: 0.8 }}/>
          </Graph>
        </div>
      </div>
    );
  }
}
