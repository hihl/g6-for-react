import React from 'react';
import { Graph, NodeMapper, G6 } from 'react-g6';

const getTreeData = function getTreeData(x1, y1, angle, depth) {
  const nodes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  const edges = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

  const deg_to_rad = Math.PI / 180;
  if (depth !== 0) {
    const x2 = x1 + Math.cos(angle * deg_to_rad) * depth * 10.0;
    const y2 = y1 + Math.sin(angle * deg_to_rad) * depth * 10.0;
    const id1 = G6.Util.guid();
    const id2 = G6.Util.guid();
    nodes.push({
      id: id1,
      x: x1,
      y: y1
    });
    nodes.push({
      id: id2,
      x: x2,
      y: y2
    });
    edges.push({
      source: id1,
      target: id2
    });
    getTreeData(x2, y2, angle - 30, depth - 1, nodes, edges);
    getTreeData(x2, y2, angle + 30, depth - 1, nodes, edges);
  }
  return {
    nodes: nodes,
    edges: edges
  };
};

export default class CodeTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getTreeData(0, 0, -90, 9)
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data}>
            <NodeMapper size={2}/>
          </Graph>
        </div>
      </div>
    );
  }
}
