import React from 'react';
import { Graph } from 'react-g6';

export default class DefaultGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [{
          id: 'node1',
          x: 100,
          y: 200,
          label: '节点1',
          parent: 'group1'
        }, {
          id: 'node2',
          x: 300,
          y: 200,
          label: '节点2',
          parent: 'group1'
        }, {
          id: 'node3',
          x: 100,
          y: 300,
          label: '节点3',
          parent: 'group2'
        }, {
          id: 'node4',
          x: 300,
          y: 300,
          label: '节点4',
          parent: 'group2'
        }],
        edges: [{
          id: 'edge1',
          target: 'node2',
          source: 'node1'
        }],
        groups: [{
          id: 'group1',
          label: '展开群组'
        }, {
          id: 'group2',
          label: '折叠群组',
          collapsed: true
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
