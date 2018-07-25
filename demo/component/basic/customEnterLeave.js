import React from 'react';
import { Graph, G6 } from 'react-g6';

G6.registerNode('customNode', {
  // 自定义入场动画
  enterAnimate: function enterAnimate(item) {
    const group = item.getGraphicGroup();
    const model = item.getModel();
    const x = model.x;
    const y = model.y;

    group.transform([['t', -x, -y], ['s', 0.01, 0.01], ['t', x, y]]);
    !group.get('destroyed') && group.animate({
      transform: [['t', -x, -y], ['s', 100, 100], ['t', x, y]]
    }, 450, 'easeBackOut');
  },

  // 自定义出场动画
  leaveAnimate: function leaveAnimate(item) {
    const group = item.getGraphicGroup();
    const model = item.getModel();
    const x = model.x;
    const y = model.y;
    group && !group.get('destroyed') && group.animate({
      transform: [['t', -x, -y], ['s', 0.01, 0.01], ['t', x, y]]
    }, 450, 'easeCircleOut', function() {
      group.remove();
    });
  }
});

export default class CustomEnterLeave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [{
          "shape": "customNode",
          "id": "node1",
          x: 100,
          y: 100
        }]
      }
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph fitView="cc" height={window.innerHeight} animate data={this.state.data}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: { nodes: [] } });
    }, 800);
  }
}
