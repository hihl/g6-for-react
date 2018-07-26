import React from 'react';
import { Graph, G6 } from 'g6-for-react';

G6.registerNode('customNode', {
  draw: item => {
    const group = item.getGraphicGroup();
    group.addShape('text', {
      attrs: {
        x: 100,
        y: 100,
        fill: '#333',
        text: '我是一个自定义节点，\n有下面那个方形和我自己组成'
      }
    });
    return group.addShape('rect', {
      attrs: {
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        stroke: 'red'
      }
    });
  }
});

export default class CustomDraw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [{
          "shape": "customNode",
          "id": "node1"
        }]
      }
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph fitView="cc" height={window.innerHeight} data={this.state.data}></Graph>
        </div>
      </div>
    );
  }
}
