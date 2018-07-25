import React from 'react';
import { Graph, Layout, G6 } from 'react-g6';
require('@antv/g6/build/plugin.util.randomData');

const Util = G6.Util;
const data = Util.createChainData(50);
const setCol = 5;

// 布局生成器
const layoutCreator = col => nodes => {
  const hgap = 76;
  const vgap = 50;

  nodes.forEach(function(node, index) {
    if (parseInt(index / col) % 2 === 0) {
      node.x = (col - index % col) * hgap;
    } else {
      node.x = index % col * hgap + hgap;
    }
    node.y = parseInt(index / col) * vgap + vgap / 2;
  });
};

export default class LayoutBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph fitView="cc" height={window.innerHeight} data={this.state.data} modes={{ default: ['panNode'] }}>
            <Layout processer={layoutCreator(setCol)}/>
          </Graph>
        </div>
      </div>
    );
  }
}
