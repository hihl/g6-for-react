import React from 'react';
import { Graph } from 'react-g6';

export default class BasicAnimate extends React.Component {
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
        }]
      }
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data} onGetG6Instance={graph => this.graph = graph}></Graph>
        </div>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.graph.update('node1', {
        x: 50,
        y: 50
      });
    }, 800);
    setTimeout(() => {
      this.graph.update('node1', {
        x: 200,
        y: 50
      });
    }, 1400);
    setTimeout(() => {
      this.graph.remove('node1');
    }, 2000);
  }
}