import React from 'react';
import { Graph } from 'g6-for-react';

export default class DefaultEdge extends React.Component {
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
          source: 'node1',
          target: 'node2',
          label: '普通边'
        }, {
          source: 'node1',
          target: {
            x: 100,
            y: 50
          },
          label: '单向悬空边'
        }, {
          source: {
            x: 150,
            y: 50
          },
          target: {
            x: 150,
            y: 100
          },
          label: '双向悬空边'
        }, {
          source: 'node1',
          target: {
            x: 100,
            y: 280
          },
          style: {
            endArrow: true
          },
          label: '箭头'
        }, {
          source: 'node1',
          target: {
            x: 10,
            y: 200
          },
          sizesize: 4,
          label: '粗细'
        }, {
          source: 'node2',
          target: {
            x: 400,
            y: 200
          },
          color: 'red',
          label: '颜色'
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
