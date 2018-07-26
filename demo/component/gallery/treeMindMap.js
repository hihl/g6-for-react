import React from 'react';
import { Tree, NodeMapper, EdgeMapper, G6 } from 'g6-for-react';

// 注册脑图节点
G6.registerNode('mindNode', {
  anchor: [[0, 0.5], [1, 0.5]]
});
// 注册脑图边
G6.registerEdge('mindEdge', {
  getPath: function getPath(item) {
    var points = item.getPoints();
    var start = points[0];
    var end = points[points.length - 1];
    var hgap = Math.abs(end.x - start.x);
    if (end.x > start.x) {
      return [['M', start.x, start.y], ['C', start.x + hgap / 4, start.y, end.x - hgap / 2, end.y, end.x, end.y]];
    }
    return [['M', start.x, start.y], ['C', start.x - hgap / 4, start.y, end.x + hgap / 2, end.y, end.x, end.y]];
  }
});

const layout = new G6.Layouts.Mindmap({
  direction: 'H', // 方向（LR/RL/H/TB/BT/V）
  getHGap: function getHGap() /* d */ {
    // 横向间距
    return 100;
  },
  getVGap: function getVGap() /* d */ {
    // 竖向间距
    return 10;
  }
});

export default class TreeMindMap extends React.Component {
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
      const model = node.getModel();
      const label = node.getLabel();
      const keyShape = node.getKeyShape();
      const parent = node.getParent();
      const box = keyShape.getBBox();
      const labelBox = label.getBBox();
      let dx = (box.maxX - box.minX + labelBox.maxX - labelBox.minX) / 2 + 8;
      let dy = (box.maxY - box.minY) / 2 + 8;
      if (parent) {
        var parentModel = parent.getModel();
        if (parentModel.x > model.x) {
          dx = -dx;
        }
        dy = 0;
      } else {
        dx = 0;
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
            <NodeMapper shape="mindNode" size={8} label={obj => ({
              text: obj.name,
              stroke: '#fff',
              lineWidth: 3
            })}/>
            <EdgeMapper shape="mindEdge" />
          </Tree>
        </div>
      </div>
    );
  }
}
