import React from 'react';
import { Graph, G6, NodeMapper } from 'react-g6';

// 设置右边中点为连接锚点
G6.registerNode('node2', {
  anchor: [
  // 右边中点
  [1, 0.5]]
});

// 设置相交盒模型为矩形
G6.registerNode('node3', {
  anchor: {
    intersectBox: 'rect'
  }
});

export default class CustomAnchor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [{
          id: 'node1',
          x: 250,
          y: 250
        }, {
          id: 'node2',
          x: 250,
          y: 100
        }, {
          id: 'node3',
          x: 50,
          y: 400
        }, {
          id: 'node5',
          x: 450,
          y: 400
        }],
        edges: [{
          id: 'edge1',
          target: 'node2',
          source: 'node1'
        }, {
          id: 'edge2',
          target: 'node3',
          source: 'node1'
        }, {
          id: 'edge4',
          target: 'node5',
          source: 'node1'
        }]
      }
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph fitView="cc" height={window.innerHeight} data={this.state.data}>
            <NodeMapper label={model => model.id} shape={model => model.id}/>
          </Graph>
        </div>
      </div>
    );
  }
}
