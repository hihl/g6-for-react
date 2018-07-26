import React from 'react';
import { Graph, G6 } from 'g6-for-react';

G6.registerNode('rect', {
  draw: function draw(item) {
    var group = item.getGraphicGroup();
    this.drawText(item);
    return group.addShape('rect', {
      attrs: {
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        stroke: 'red'
      }
    });
  },
  drawText: function drawText(item) {
    var group = item.getGraphicGroup();
    var text = this.getText();
    group.addShape('text', {
      attrs: {
        x: 100,
        y: 100,
        fill: '#333',
        text: text
      }
    });
  },
  getText: function getText() {
    return '我是一个节点 rect';
  }
});

G6.registerNode('custom', {
  getText: function getText() {
    return '我是一个自定义节点，\n继承于 rect';
  }
}, 'rect');

export default class CustomInherit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [{
          id: 'node1',
          x: 50,
          y: 50,
          shape: 'rect'
        }, {
          id: 'node2',
          x: 100,
          y: 200,
          shape: 'custom'
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
