import React from 'react';
import { Tree, NodeMapper, EdgeMapper, G6 } from 'react-g6';

G6.registerNode('treeNode', {
  anchor: [[0, 0.5], [1, 0.5]]
});
G6.registerEdge('VH', {
  getPath: function getPath(item) {
    var points = item.getPoints();
    var start = points[0];
    var end = points[points.length - 1];
    return [['M', start.x, start.y], ['L', start.x, end.y], ['L', end.x, end.y]];
  }
});

const layout = new G6.Layouts.IndentedTree({
  direction: 'LR', // 方向（LR/RL/H）
  indent: 30, // 缩进量
  getVGap: function getVGap() /* d */ {
    // 竖向间距
    return 4;
  }
});

export default class TreeIndented extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        roots: [{
          name: "Modeling Methods",
          children: [
            {
              name: "Classification",
              children: [
                { name: "Logistic regression" },
                { name: "Linear discriminant analysis" },
                { name: "Rules" },
                { name: "Decision trees" },
                { name: "Naive Bayes" },
                { name: "K nearest neighbor" },
                { name: "Probabilistic neural network" },
                { name: "Support vector machine" }
              ]
            },
            {
              name: "Consensus",
              children: [
                {
                  name: "Models diversity",
                  children: [
                    { name: "Different initializations" },
                    { name: "Different parameter choices" },
                    { name: "Different architectures" },
                    { name: "Different modeling methods" },
                    { name: "Different training sets" },
                    { name: "Different feature sets" }
                  ]
                },
                {
                  name: "Methods",
                  children: [
                    { name: "Classifier selection" },
                    { name: "Classifier fusion" }
                  ]
                },
                {
                  name: "Common",
                  children: [
                    { name: "Bagging" },
                    { name: "Boosting" },
                    { name: "AdaBoost" }
                  ]
                }
              ]
            },
            {
              name: "Regression",
              children: [
                { name: "Multiple linear regression" },
                { name: "Partial least squares" },
                { name: "Multi-layer feedforward neural network" },
                { name: "General regression neural network" },
                { name: "Support vector regression" }
              ]
            }
          ]
        }]
      }
    };
  }

  onAfterchange = (ev, tree) => {
    tree.getNodes().forEach(node => {
      const label = node.getLabel();
      const keyShape = node.getKeyShape();
      const children = node.getChildren();
      const box = keyShape.getBBox();
      const labelBox = label.getBBox();
      let dx = (box.maxX - box.minX + labelBox.maxX - labelBox.minX) / 2 + 8;
      const dy = 0;
      if (children.length != 0) {
        dx = -dx;
      }
      label.translate(dx, dy);
    });
    tree.draw();
  };

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Tree
            fitView="autoZoom"
            animate={true}
            height={window.innerHeight}
            data={this.state.data}
            onAfterchange={this.onAfterchange}
            layout={layout}
          >
            <NodeMapper shape="treeNode" size={16} label={obj => obj.name}/>
            <EdgeMapper shape="VH" />
          </Tree>
        </div>
      </div>
    );
  }
}
