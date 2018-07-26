import React from 'react';
import { Graph, G6 } from 'g6-for-react';
require('@antv/g6/build/plugin.tool.minimap');

const Plugin = G6.Plugins["tool.minimap"];
const plugin = new Plugin({
  container: 'minimap',
  width: 180,
  height: 120
});

export default class Minimap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [{
          id: 'node0',
          x: -100,
          y: 200
        }, {
          id: 'node1',
          x: 100,
          y: 200
        }, {
          id: 'node2',
          x: 300,
          y: 200
        }, {
          id: 'node3',
          x: 600,
          y: 200
        }],
        edges: [{
          target: 'node0',
          source: 'node1'
        }, {
          target: 'node2',
          source: 'node1'
        }, {
          target: 'node2',
          source: 'node3'
        }]
      }
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <div id="minimap" style={{
            border: '1px solid #999',
            position: 'absolute',
            top: 100
          }}></div>
          <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data} plugins={[plugin]}>
          </Graph>
        </div>
      </div>
    );
  }
}
