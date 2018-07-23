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
          label: '节点1',
          parent: 'group1'
        }],
        groups: [{
          id: 'group1',
          label: '群组1',
          collapsed: false
        }]
      }
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph {...this.state}></Graph>
        </div>
      </div>
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
          }, {
            id: 'node2',
            x: 200,
            y: 100,
            parent: 'group1',
            label: '节点2'
          }, {
            id: 'node3',
            x: 20,
            y: 100,
            parent: 'group1',
            label: '节点3'
          }],
          groups: [{
            id: 'group1',
            label: '群组1',
            collapsed: false
          }]
        }
      });
    }, 800);
    setTimeout(() => {
      this.setState({
        data: {
          nodes: [{
            id: 'node1',
            x: 200,
            y: 50,
            parent: 'group1',
            label: '节点1'
          }, {
            id: 'node2',
            x: 20,
            y: 10,
            parent: 'group1',
            label: '节点2'
          }],
          groups: [{
            id: 'group1',
            label: '群组1',
            collapsed: false
          }]
        }
      });
    }, 1400);
  }
}