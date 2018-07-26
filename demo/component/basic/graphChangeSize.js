import React from 'react';
import { Graph } from 'react-g6';

export default class GraphChangeSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [{
          id: 'node1',
          x: 100,
          y: 200,
          size: 40,
          label: '节点1'
        }, {
          id: 'node2',
          x: 300,
          y: 200,
          color: '#eb2f96',
          label: '节点2'
        }],
        edges: [{
          id: 'edge1',
          target: 'node2',
          source: 'node1'
        }]
      },
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <div>
            <button onClick={() => this.setState({ width: 250, height: 250 })}>250 * 250</button>
            <button onClick={() => this.setState({ width: 350, height: 350 })}>350 * 350</button>
            <button onClick={() => this.setState({ width: 400, height: 400 })}>400 * 400</button>
          </div>
          <Graph forceFit={true} css={{ border: '1px solid red' }} fitView="cc" animate={true} width={this.state.width} height={this.state.height} data={this.state.data}></Graph>
        </div>
      </div>
    );
  }
}
