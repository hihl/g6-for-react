import React from 'react';
import { Graph, G6 } from 'g6-for-react';
require('@antv/g6/build/plugin.layout.circle');
require('@antv/g6/build/plugin.util.randomData');

const Plugin = G6.Plugins["layout.circle"];
const plugin = new Plugin();
const Util = G6.Util;

export default class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Util.createCyclicData(30)
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data} plugins={[plugin]}>
          </Graph>
        </div>
      </div>
    );
  }
}
