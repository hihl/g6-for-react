import React from 'react';
import { Graph, EdgeMapper } from 'g6-for-react';
require('@antv/g6/build/plugin.edge.quadraticCurve');

export default class QuadraticCurve extends React.Component {
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
          target: 'node2',
          source: 'node1',
          shape: 'quadraticCurve'
        }, {
          target: 'node1',
          source: 'node2',
          shape: 'quadraticCurve'
        }]
      }
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data}>
            <EdgeMapper style={{ endArrow: true }}/>
          </Graph>
        </div>
      </div>
    );
  }
}
