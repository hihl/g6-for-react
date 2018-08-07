require("source-map-support").install();
exports.id = "main";
exports.modules = {

/***/ "./src/server/previews.js":
/*!********************************!*\
  !*** ./src/server/previews.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  basic: {
    "interaction-pan-node": {
      title: "交互-拖拽节点",
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  const width = window.innerWidth;
  const height = window.innerHeight;

  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200
          }, {
            id: 'node2',
            x: 300,
            y: 200
          }],
          edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
          }]
        }
      };
    }
  
    onNodeDragstart(ev) {
      const item = ev.item;
      const model = item.getModel();
      this.node = item;
      this.dx = model.x - ev.x;
      this.dy = model.y - ev.y;
    }
  
    onNodeDrag(ev) {
      this.node && this.graph.update(this.node, {
        x: ev.x + this.dx,
        y: ev.y + this.dy
      });
    }
  
    onNodeDragend() {
      this.node = undefined;
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph 
              width={width} 
              height={height} 
              data={this.state.data} 
              onGetG6Instance={graph => this.graph = graph}
              onNodeDragstart={this.onNodeDragstart.bind(this)}
              onNodeDrag={this.onNodeDrag.bind(this)}
              onNodeDragend={this.onNodeDragend.bind(this)}
            />
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "interaction-behaviour-mode": {
      title: "交互-模式与行为",
      code: `<script type="text/babel">
  const { Graph, G6, NodeMapper, EdgeMapper } = window['g6-for-react'];
  // 注册鼠标进入节点变红的行为
  G6.registerBehaviour('mouseEnterFillRed', function(graph) {
    graph.behaviourOn('node:mouseenter', function(ev) {
      graph.update(ev.item, {
        color: 'red'
      });
    });
  });

  // 注册鼠标进入节点变绿的行为
  G6.registerBehaviour('mouseEnterFillGreen', function(graph) {
    graph.behaviourOn('node:mouseenter', function(ev) {
      graph.update(ev.item, {
        color: 'green'
      });
    });
  });

  // 注册鼠标移出节点变原色的行为
  G6.registerBehaviour('mouseLeaveResetFill', function(graph) {
    graph.behaviourOn('node:mouseleave', function(ev) {
      graph.update(ev.item, {
        color: '#1890FF'
      });
    });
  });
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: '事件',
            x: 80,
            y: 150
          }, {
            id: '行为',
            x: 200,
            y: 150
          }, {
            id: '模式',
            x: 320,
            y: 150
          }],
          edges: [{
            source: '事件',
            target: '行为',
            label: '组成'
          }, {
            source: '行为',
            target: '模式',
            label: '组成'
          }]
        },
        mode: 'red'
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <div><button onClick={() => {
              if (this.state.mode === 'red') {
                this.setState({ mode: 'green' });
              } else {
                this.setState({ mode: 'red' });
              }
            }}>切换模式</button></div>
            <Graph 
              fitView="cc" 
              height={window.innerHeight} 
              data={this.state.data}
              modes={{
                red: ['mouseEnterFillRed', 'mouseLeaveResetFill'],
                green: ['mouseEnterFillGreen', 'mouseLeaveResetFill']
              }}
              mode={this.state.mode}
              onGetG6Instance={graph => this.graph = graph}
            >
              <NodeMapper label={model => model.id}/>
              <EdgeMapper style={() => ({ endArrow: true })}/>
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "custom-anchor": {
      title: "自定义-锚点",
      code: `<script type="text/babel">
  const { Graph, G6, NodeMapper } = window['g6-for-react'];
  // 设置右边中点为连接锚点
  G6.registerNode('node2', {
    anchor: [
    // 右边中点
    [1, 0.5]]
  });

  // 设置相交盒模型为矩形
  G6.registerNode('node3', {
    anchor: {
      intersectBox: 'rect'
    }
  });
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 250,
            y: 250
          }, {
            id: 'node2',
            x: 250,
            y: 100
          }, {
            id: 'node3',
            x: 50,
            y: 400
          }, {
            id: 'node5',
            x: 450,
            y: 400
          }],
          edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
          }, {
            id: 'edge2',
            target: 'node3',
            source: 'node1'
          }, {
            id: 'edge4',
            target: 'node5',
            source: 'node1'
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" height={window.innerHeight} data={this.state.data}>
              <NodeMapper label={model => model.id} shape={model => model.id}/>
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "custom-draw": {
      title: "自定义-绘制",
      code: `<script type="text/babel">
  const { Graph, G6 } = window['g6-for-react'];
  G6.registerNode('customNode', {
    draw: item => {
      const group = item.getGraphicGroup();
      group.addShape('text', {
        attrs: {
          x: 100,
          y: 100,
          fill: '#333',
          text: '我是一个自定义节点，有下面那个方形和我自己组成'
        }
      });
      return group.addShape('rect', {
        attrs: {
          x: 100,
          y: 100,
          width: 100,
          height: 100,
          stroke: 'red'
        }
      });
    }
  });
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            "shape": "customNode",
            "id": "node1"
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" height={window.innerHeight} data={this.state.data}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "custom-enter-leave-animate": {
      title: "自定义-出入场动画",
      code: `<script type="text/babel">
  const { Graph, G6 } = window['g6-for-react'];
  G6.registerNode('customNode', {
    // 自定义入场动画
    enterAnimate: function enterAnimate(item) {
      const group = item.getGraphicGroup();
      const model = item.getModel();
      const x = model.x;
      const y = model.y;
  
      group.transform([['t', -x, -y], ['s', 0.01, 0.01], ['t', x, y]]);
      !group.get('destroyed') && group.animate({
        transform: [['t', -x, -y], ['s', 100, 100], ['t', x, y]]
      }, 450, 'easeBackOut');
    },
  
    // 自定义出场动画
    leaveAnimate: function leaveAnimate(item) {
      const group = item.getGraphicGroup();
      const model = item.getModel();
      const x = model.x;
      const y = model.y;
      group && !group.get('destroyed') && group.animate({
        transform: [['t', -x, -y], ['s', 0.01, 0.01], ['t', x, y]]
      }, 450, 'easeCircleOut', function() {
        group.remove();
      });
    }
  });
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            "shape": "customNode",
            "id": "node1",
            x: 100,
            y: 100
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" height={window.innerHeight} animate data={this.state.data}/>
          </div>
        </div>
      );
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ data: { nodes: [] } });
      }, 800);
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "custom-flowing-edge": {
      title: "自定义-流动效果线条",
      code: `<script type="text/babel">
  const { Graph, G6, EdgeMapper } = window['g6-for-react'];
  G6.registerEdge('flowingEdge', {
    afterDraw: function afterDraw(item) {
      var keyShape = item.getKeyShape();
      keyShape.attr('lineDash', [10, 10]);
      keyShape.attr('lineDashOffset', 0);
      keyShape.animate({
        lineDashOffset: -20,
        repeat: true
      }, 500);
    }
  });
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200
          }, {
            id: 'node2',
            x: 300,
            y: 200
          }],
          edges: [{
            target: 'node2',
            source: 'node1'
          }]
        },
        flowingEdge: true
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" height={window.innerHeight} data={this.state.data}>
              { this.state.flowingEdge && <EdgeMapper shape="flowingEdge"/> }
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "custom-inherit": {
      title: "自定义-继承",
      code: `<script type="text/babel">
  const { Graph, G6 } = window['g6-for-react'];
  G6.registerNode('rect', {
    draw: function draw(item) {
      var group = item.getGraphicGroup();
      this.drawText(item);
      return group.addShape('rect', {
        attrs: {
          x: 100,
          y: 100,
          width: 100,
          height: 100,
          stroke: 'red'
        }
      });
    },
    drawText: function drawText(item) {
      var group = item.getGraphicGroup();
      var text = this.getText();
      group.addShape('text', {
        attrs: {
          x: 100,
          y: 100,
          fill: '#333',
          text: text
        }
      });
    },
    getText: function getText() {
      return '我是一个节点 rect';
    }
  });
  
  G6.registerNode('custom', {
    getText: function getText() {
      return '我是一个自定义节点，\n继承于 rect';
    }
  }, 'rect');
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 50,
            y: 50,
            shape: 'rect'
          }, {
            id: 'node2',
            x: 100,
            y: 200,
            shape: 'custom'
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" height={window.innerHeight} data={this.state.data}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "graph-animate": {
      title: "图-动画",
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
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
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data} onGetG6Instance={graph => this.graph = graph}></Graph>
          </div>
        </div>
      );
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.graph.update('node1', {
          x: 50,
          y: 50
        });
      }, 800);
      setTimeout(() => {
        this.setState({ data: { nodes: [{
          id: 'node1',
          x: 200,
          y: 50,
          label: '节点1'
        }] } });
      }, 1400);
      setTimeout(() => {
        this.setState({ data: { nodes: [] } });
      }, 2000);
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "default-node": {
      title: "默认-边",
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200,
            size: 40,
            label: '节点1'
          }, {
            id: 'node2',
            x: 300,
            y: 200,
            color: '#eb2f96',
            label: '节点2'
          }],
          edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
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
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "default-edge": {
      title: '默认-边',
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200
          }, {
            id: 'node2',
            x: 300,
            y: 200
          }],
          edges: [{
            source: 'node1',
            target: 'node2',
            label: '普通边'
          }, {
            source: 'node1',
            target: {
              x: 100,
              y: 50
            },
            label: '单向悬空边'
          }, {
            source: {
              x: 150,
              y: 50
            },
            target: {
              x: 150,
              y: 100
            },
            label: '双向悬空边'
          }, {
            source: 'node1',
            target: {
              x: 100,
              y: 280
            },
            style: {
              endArrow: true
            },
            label: '箭头'
          }, {
            source: 'node1',
            target: {
              x: 10,
              y: 200
            },
            sizesize: 4,
            label: '粗细'
          }, {
            source: 'node2',
            target: {
              x: 400,
              y: 200
            },
            color: 'red',
            label: '颜色'
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
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "default-group": {
      title: '默认-分组',
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
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
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "graph-change-size": {
      title: '图-更改画布尺寸',
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200,
            size: 40,
            label: '节点1'
          }, {
            id: 'node2',
            x: 300,
            y: 200,
            color: '#eb2f96',
            label: '节点2'
          }],
          edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
          }]
        },
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <div>
              <button onClick={() => this.setState({ width: 250, height: 250 })}>250 * 250</button>
              <button onClick={() => this.setState({ width: 350, height: 350 })}>350 * 350</button>
              <button onClick={() => this.setState({ width: 400, height: 400 })}>400 * 400</button>
            </div>
            <Graph forceFit={true} css={{ border: '1px solid red' }} fitView="cc" animate={true} width={this.state.width} height={this.state.height} data={this.state.data}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "graph-zIndex": {
      title: '图-调整图层',
      code: `<script type="text/babel">
  const { Graph, NodeMapper } = window['g6-for-react'];
  const nodes = [];
  const width = window.innerWidth;
  const height = window.innerHeight;
  const num = 500;
  for (let index = 0; index < num; index++) {
    nodes.push({
      x: width * Math.random(),
      y: height * Math.random()
    });
  }
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes
        }
      };
    }
  
    onNodeMouseenter(e) {
      const item = e.item;
      this.graph.toFront(item);
      this.graph.update(item, {
        style: {
          fill: 'red'
        }
      });
    };
  
    onNodeMouseleave(e) {
      const item = e.item;
      this.graph.toBack(item);
      this.graph.update(item, {
        style: {
          fill: '#1890FF'
        }
      });
    };
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph 
              width={width} 
              height={height} 
              data={this.state.data} 
              onGetG6Instance={graph => this.graph = graph}
              onNodeMouseenter={this.onNodeMouseenter.bind(this)}
              onNodeMouseleave={this.onNodeMouseleave.bind(this)}
            >
              <NodeMapper style={{ fillOpacity: 0.8 }}/>
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
  }
});

/***/ })

};
//# sourceMappingURL=main.6d5c7a515dd2eeae925f.hot-update.js.map