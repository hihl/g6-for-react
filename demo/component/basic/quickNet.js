import React from 'react';
import { Graph } from 'g6-for-react';

export default class QuickNet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [{
          id: 'node1',
          x: 100,
          y: 200,
          label: '节点1'
        }, {
          id: 'node2',
          x: 300,
          y: 200,
          label: '节点2'
        }],
        edges: [{
          target: 'node2',
          source: 'node1'
        }]
      }
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data}></Graph>
        </div>
      </div>
    );
  }
}
