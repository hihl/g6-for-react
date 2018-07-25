import React from 'react';
import { Graph } from 'react-g6';

export default class ViewportZoom extends React.Component {
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
      }
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <div>{
            [0.2, 0.5, 1, 1.5, 2].map(ratio => <button key={ratio} onClick={() => this.graph.zoom(ratio)}>{`${ratio * 100}%`}</button>)
          }</div>
          <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data} onGetG6Instance={graph => this.graph = graph}></Graph>
        </div>
      </div>
    );
  }
}
