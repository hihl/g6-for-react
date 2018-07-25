import React from 'react';
import { Graph, G6, NodeMapping } from 'react-g6';
require('@antv/g6/build/plugin.layout.archimeddeanSpiral');
require('@antv/g6/build/plugin.util.randomData');

const Plugin = G6.Plugins["layout.archimeddeanSpiral"];
const plugin = new Plugin();
const Util = G6.Util;

export default class ArchimeddeanSpiral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Util.createChainData(160)
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data} plugins={[plugin]}>
            <NodeMapping size={16}/>
          </Graph>
        </div>
      </div>
    );
  }
}
