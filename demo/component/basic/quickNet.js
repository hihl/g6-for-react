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
      <Graph {...this.state}></Graph>
    );
  }

  componentDidMount() {
    const data = this.state.data;
    setTimeout(() => {
      this.setState({
        data: {
          nodes: [{
            id: 'node1',
            x: 200,
            y: 150,
            parent: 'group1',
            label: '节点1'
          }]
        }
      });
    }, 800);
  }
}
