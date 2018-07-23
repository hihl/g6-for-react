import React from 'react';
import { Graph } from 'react-g6';

export default class QuickNet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fitView: 'cc',
      height: window.innerHeight,
      animate: true,
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
          <Graph {...this.state}></Graph>
        </div>
      </div>
    );
  }
}
