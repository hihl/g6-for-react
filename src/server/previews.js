export default {
  basic: {
    "interaction-pan-node": {
      title: "交互-拖拽节点",
      code: `<script type="text/babel">
  const { Graph } = window.ReactG6;
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
  const { Graph, G6, NodeMapper, EdgeMapper } = window.ReactG6;
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
  const { Graph, G6, NodeMapper } = window.ReactG6;
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
  const { Graph, G6 } = window.ReactG6;
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
  const { Graph, G6 } = window.ReactG6;
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
  const { Graph, G6, EdgeMapper } = window.ReactG6;
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
  const { Graph, G6 } = window.ReactG6;
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
      return '我是一个自定义节点，继承于 rect';
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
  const { Graph } = window.ReactG6;
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
  const { Graph } = window.ReactG6;
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
  const { Graph } = window.ReactG6;
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
  const { Graph } = window.ReactG6;
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
  const { Graph } = window.ReactG6;
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
  const { Graph, NodeMapper } = window.ReactG6;
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
    "layout-composite": {
      title: '布局-综合',
      code: `<script src="/scripts/plugins.min.js"></script>
<script type="text/babel">
  const { Graph, Layout, G6 } = window.ReactG6;
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
  class Demo extends React.Component {
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
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "quick-net": {
      title: '快速上手-网图',
      code: `<script type="text/babel">
  const { Graph } = window.ReactG6;
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200,
            label: '节点1'
          }, {
            id: 'node2',
            x: 300,
            y: 200,
            label: '节点2'
          }],
          edges: [{
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
    "quick-tree": {
      title: '快速上手-树图',
      code: `<script type="text/babel">
  const { Tree } = window.ReactG6;
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          roots: [{
            label: 'root',
            children: [{
              label: 'child1',
              children: [{
                label: 'child1.1'
              }]
            }, {
              label: 'child2'
            }]
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Tree fitView="cc" animate={true} height={window.innerHeight} data={this.state.data}></Tree>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "viewport-fitView": {
      title: '视口-自适应',
      code: `<script type="text/babel">
  const { Graph } = window.ReactG6;
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
        fitView: 'cc'
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <div>{
              ['tl', 'lc', 'bl', 'cc', 'tc', 'tr', 'rc', 'br', 'bc', 'autoZoom'].map(fitView => <button key={fitView} onClick={() => this.setState({ fitView })}>{fitView}</button>)
            }</div>
            <Graph fitView={this.state.fitView} animate={true} height={window.innerHeight} data={this.state.data} onGetG6Instance={graph => this.graph = graph}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "viewport-focus": {
      title: '视口-聚焦',
      code: `<script type="text/babel">
  const { Graph } = window.ReactG6;
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
            <div><button onClick={() => this.graph.focus('node1')}>聚焦节点1</button> <button onClick={() => this.graph.focus('node2')}>聚焦节点2</button></div>
            <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data} onGetG6Instance={graph => this.graph = graph}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "viewport-translate": {
      title: '视口-平移',
      code: `<script type="text/babel">
  const { Graph } = window.ReactG6;
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
  
    onDrag(ev) {
      if (this.lastPoint) {
        this.graph.translate(ev.domX - this.lastPoint.x, ev.domY - this.lastPoint.y);
      }
      this.lastPoint = {
        x: ev.domX,
        y: ev.domY
      };
    }
  
    onDragend() {
      this.lastPoint = undefined;
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
              onDrag={this.onDrag.bind(this)}
              onDragend={this.onDragend.bind(this)}
            />
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "viewport-zoom": {
      title: '视口-缩放',
      code: `<script type="text/babel">
  const { Graph } = window.ReactG6;
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
            <div>{
              [0.2, 0.5, 1, 1.5, 2].map(ratio => <button key={ratio} onClick={() => this.graph.zoom(ratio)}>{\`\${ratio * 100}%\`}</button>)
            }</div>
            <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data} onGetG6Instance={graph => this.graph = graph}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
  },
  plugin: {
    "plugin-archimeddean-spiral": {
      title: '布局-阿基米德螺线',
      code: `<script src="/scripts/plugins.min.js"></script>
<script type="text/babel">
  const { Graph, NodeMapper, G6 } = window.ReactG6;
  const Plugin = G6.Plugins["layout.archimeddeanSpiral"];
  const plugin = new Plugin();
  const Util = G6.Util;
  class Demo extends React.Component {
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
              <NodeMapper size={16}/>
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "plugin-circle": {
      title: '布局-圆环',
      code: `<script src="/scripts/plugins.min.js"></script>
<script type="text/babel">
  const { Graph, G6 } = window.ReactG6;
  const Plugin = G6.Plugins["layout.circle"];
  const plugin = new Plugin();
  const Util = G6.Util;
  class Demo extends React.Component {
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
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "plugin-max-spanning-forest": {
      title: '模版-最大生成森林',
      code: `<script src="/scripts/plugins.min.js"></script>
<script type="text/babel">
  const { Graph, G6 } = window.ReactG6;
  const Plugin = G6.Plugins["template.maxSpanningForest"];
  const plugin = new Plugin();
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 0,
            weight: 42.194703980779714,
            label: 'name0'
          }, {
            id: 1,
            weight: 72.86640536738712,
            label: 'name1'
          }, {
            id: 2,
            weight: 82.29983433131834,
            label: 'name2'
          }, {
            id: 3,
            weight: 23.204885400175424,
            label: 'name3'
          }, {
            id: 4,
            weight: 100.84964997048472,
            label: 'name4'
          }, {
            id: 5,
            weight: 72.90971413062293,
            label: 'name5'
          }, {
            id: 6,
            weight: 15.029159176990348,
            label: 'name6'
          }, {
            id: 7,
            weight: 24.38308784826313,
            label: 'name7'
          }, {
            id: 8,
            weight: 78.00164088714241,
            label: 'name8'
          }, {
            id: 9,
            weight: 53.580641600279954,
            label: 'name9'
          }],
          edges: [{
            id: '1-6',
            source: 1,
            target: 6,
            weight: 89.69805016254719
          }, {
            id: '5-3',
            source: 5,
            target: 3,
            weight: 86.31397440928264
          }, {
            id: '0-5',
            source: 0,
            target: 5,
            weight: 76.94877138495532
          }, {
            id: '5-9',
            source: 5,
            target: 9,
            weight: 63.754902669930644
          }, {
            id: '2-7',
            source: 2,
            target: 7,
            weight: 4.449707271000913
          }, {
            id: '3-4',
            source: 3,
            target: 4,
            weight: 36.97483959651564
          }, {
            id: '9-3',
            source: 9,
            target: 3,
            weight: 50.354719513581635
          }, {
            id: '6-4',
            source: 6,
            target: 4,
            weight: 10.02660118138856
          }, {
            id: '8-3',
            source: 8,
            target: 3,
            weight: 13
          }, {
            id: '8-4',
            source: 8,
            target: 4,
            weight: 13
          }, {
            id: '2-1',
            source: 2,
            target: 1,
            weight: 13
          }, {
            id: '4-5',
            source: 4,
            target: 5,
            weight: 60
          }, {
            id: '4-8',
            source: 4,
            target: 8,
            weight: 63
          }, {
            id: '8-5',
            source: 8,
            target: 5,
            weight: 13
          }, {
            id: '9-2',
            source: 9,
            target: 2,
            weight: 13
          }, {
            id: '1-8',
            source: 1,
            target: 8,
            weight: 19.02660118138856
          }, {
            id: '4-2',
            source: 4,
            target: 2,
            weight: 50.02660118138856
          }]
        }
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
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "plugin-minimap": {
      title: '缩略图',
      code: `<script src="/scripts/plugins.min.js"></script>
<script type="text/babel">
  const { Graph, G6 } = window.ReactG6;
  const Plugin = G6.Plugins["tool.minimap"];
  const plugin = new Plugin({
    container: 'minimap',
    width: 180,
    height: 120
  });
  class Demo extends React.Component {
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
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "plugin-quadratic-curve": {
      title: '二阶贝塞尔曲线',
      code: `<script src="/scripts/plugins.min.js"></script>
<script type="text/babel">
  const { Graph, EdgeMapper } = window.ReactG6;
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
            source: 'node1',
            shape: 'quadraticCurve'
          }, {
            target: 'node1',
            source: 'node2',
            shape: 'quadraticCurve'
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data}>
              <EdgeMapper style={{ endArrow: true }}/>
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
  },
  gallery: {
    "gallery-code-tree": {
      title: '函数生成树',
      code: `<script type="text/babel">
  const { Graph, NodeMapper, G6 } = window.ReactG6;
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
  class Demo extends React.Component {
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
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "gallery-tree-compact-box": {
      title: '紧凑树',
      code: `<script type="text/babel">
  const { Tree, NodeMapper, EdgeMapper, G6 } = window.ReactG6;
  G6.registerNode('treeNode', {
    anchor: [[0, 0.5], [1, 0.5]]
  });
  G6.registerEdge('smooth', {
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
  
  const layout = new G6.Layouts.CompactBoxTree({
    // direction: 'LR', // 方向（LR/RL/H/TB/BT/V）
    getHGap: function getHGap() /* d */ {
      // 横向间距
      return 100;
    },
    getVGap: function getVGap() /* d */ {
      // 竖向间距
      return 10;
    }
  });
  class Demo extends React.Component {
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
  
    onAfterchange(ev, tree) {
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
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Tree
              fitView="autoZoom"
              animate={true}
              height={window.innerHeight}
              data={this.state.data}
              onAfterchange={this.onAfterchange.bind(this)}
              layout={layout}
            >
              <NodeMapper shape="treeNode" size={8} label={obj => obj.name}/>
              <EdgeMapper shape="smooth" />
            </Tree>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "gallery-tree-dendrogram": {
      title: '系统树',
      code: `<script type="text/babel">
  const { Tree, NodeMapper, EdgeMapper, G6 } = window.ReactG6;
  G6.registerNode('treeNode', {
    anchor: [[0, 0.5], [1, 0.5]]
  });
  G6.registerEdge('smooth', {
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
  
  const layout = new G6.Layouts.Dendrogram({
    "direction": "LR",
    "nodeSize": 20,
    "rankSep": 400
  });
  class Demo extends React.Component {
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
  
    onAfterchange(ev, tree) {
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
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Tree
              fitView="autoZoom"
              animate={true}
              height={window.innerHeight}
              data={this.state.data}
              onAfterchange={this.onAfterchange.bind(this)}
              layout={layout}
              showButton={false}
            >
              <NodeMapper shape="treeNode" size={8} label={obj => obj.name}/>
              <EdgeMapper shape="smooth" />
            </Tree>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "gallery-tree-indented": {
      title: '生态树',
      code: `<script type="text/babel">
  const { Tree, NodeMapper, EdgeMapper, G6 } = window.ReactG6;
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
  class Demo extends React.Component {
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
  
    onAfterchange(ev, tree) {
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
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Tree
              fitView="autoZoom"
              animate={true}
              height={window.innerHeight}
              data={this.state.data}
              onAfterchange={this.onAfterchange.bind(this)}
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
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "gallery-tree-mindmap": {
      title: '脑图树',
      code: `<script type="text/babel">
  const { Tree, NodeMapper, EdgeMapper, G6 } = window.ReactG6;
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
  class Demo extends React.Component {
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
  
    onAfterchange(ev, tree) {
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
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Tree
              fitView="autoZoom"
              animate={true}
              height={window.innerHeight}
              data={this.state.data}
              onAfterchange={this.onAfterchange.bind(this)}
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
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "gallery-xiaomi": {
      title: '小米关系图谱',
      code: `<script src="/scripts/plugins.min.js"></script>
<script src="https://gw.alipayobjects.com/os/antv/assets/lib/jquery-3.2.1.min.js"></script>
<script src="https://gw.alipayobjects.com/os/antv/assets/lib/d3-4.13.0.min.js"></script>
<script type="text/babel">
  const { Graph, NodeMapper, EdgeMapper, G6 } = window.ReactG6;
  const { forceSimulation, forceLink, forceManyBody, forceX, forceY, forceCollide } = d3;

  const Mapper = G6.Plugins['tool.d3.mapper'];
  const nodeSizeMapper = new Mapper('node', 'degree', 'size', [8, 48], {
    legendCfg: null
  });
  const nodeColorMapper = new Mapper('node', 'type', 'color', ['#e18826', '#002a67']);

  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: props.data
      };
      this.layout = this.layout.bind(this);
      this.tryHideLabel = this.tryHideLabel.bind(this);
      this.resetState = this.resetState.bind(this);
      this.onMousedown = this.onMousedown.bind(this);
      this.onDragstart = this.onDragstart.bind(this);
      this.onDrag = this.onDrag.bind(this);
      this.onNodeMouseenter = this.onNodeMouseenter.bind(this);
      this.onNodeMouseleave = this.onNodeMouseleave.bind(this);
    }
  
    layout(nodes, edges, graph) {
      if (this.simulation) {
        this.simulation.alphaTarget(0.3).restart();
      } else {
        this.simulation = forceSimulation(nodes).force('charge', forceManyBody().strength(-100)).force('link', forceLink(edges).id(function(model) {
          return model.id;
        })).force('collision', forceCollide().radius(model => model.size / 2 * 1.2)).force('y', forceY()).force('x', forceX()).on('tick', function() {
          graph.updateNodePosition();
        });
      }
    }
  
    // 鼠标移入节点显示 label
    tryHideLabel(node) {
      const model = node.getModel();
      const label = node.getLabel();
      const labelBox = label.getBBox();
      if (labelBox.maxX - labelBox.minX > model.size) {
        label.hide();
        this.graph.draw();
      }
    }
  
    resetState() {
      if (this.subject) {
        this.simulation.alphaTarget(0);
        this.subject.fx = null;
        this.subject.fy = null;
        this.subject = null;
      }
    }
  
    onMousedown(ev) {
      if (ev.domEvent.button === 0) {
        this.subject = this.simulation.find(ev.x, ev.y);
      }
    }
  
    onDragstart() {
      this.subject && this.simulation.alphaTarget(0.3).restart();
    }
  
    onDrag(ev) {
      if (this.subject) {
        this.subject.fx = ev.x;
        this.subject.fy = ev.y;
      }
    }
  
    onNodeMouseenter(ev) {
      const item = ev.item;
      this.graph.toFront(item);
      item.getLabel().show();
      this.graph.draw();
    }
  
    onNodeMouseleave(ev) {
      const item = ev.item;
      this.tryHideLabel(item);
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic" style={{ background: '#e5ddd1' }}>
            <Graph
              height={window.innerHeight}
              data={this.state.data}
              plugins={[nodeSizeMapper, nodeColorMapper]}
              modes={{
                default: ['rightPanCanvas']
              }}
              layout={this.layout}
              onGetG6Instance={graph => this.graph = graph}
              onMousedown={this.onMousedown}
              onDragstart={this.onDragstart}
              onDrag={this.onDrag}
              onMouseup={this.resetState}
              onCanvasMouseleave={this.resetState}
              onNodeMouseenter={this.onNodeMouseenter}
              onNodeMouseleave={this.onNodeMouseleave}
            >
              <NodeMapper 
                style={model => model.type === 'Company' ? {
                  fill: '#e18826',
                  shadowColor: 'rgba(0,0,0, 0.3)',
                  shadowBlur: 3,
                  shadowOffsetX: 2,
                  shadowOffsetY: 2,
                  stroke: null
                } : {
                  fill: '#002a67',
                  shadowColor: 'rgba(0,0,0, 0.3)',
                  shadowBlur: 3,
                  shadowOffsetX: 3,
                  shadowOffsetY: 5,
                  stroke: null
                }}
                label={model => ({
                  text: model.properties['name'],
                  stroke: null,
                  fill: '#fff'
                })}
              />
              <EdgeMapper 
                style={() => ({
                  stroke: '#b3b3b3',
                  lineWidth: 2
                })}
              />
            </Graph>
          </div>
        </div>
      );
    }
  
    componentDidMount() {
      this.graph.translate(this.graph.getWidth() / 2, this.graph.getHeight() / 2);
      const nodes = this.graph.getNodes();
      const edges = this.graph.getEdges();
  
      edges.forEach(edge => {
        edge.getGraphicGroup().set('capture', false); // 移除边的捕获，提升图形拾取效率
      });
  
      nodes.forEach(node => {
        this.tryHideLabel(node);
      });
    }
  
    componentWillUnmount() {
      this.simulation.stop();
      this.simulation = null;
    }
  }

  $.getJSON('/data/xiaomi.json', function(data) {
    ReactDOM.render(<Demo data={data}/>, document.getElementById('mountNode'));
  });
</script>`
    },
    "gallery-university": {
      title: '浙江省各城市大学分布',
      code: `<script src="/scripts/plugins.min.js"></script>
<script src="https://gw.alipayobjects.com/os/antv/assets/lib/jquery-3.2.1.min.js"></script>
<script src="https://gw.alipayobjects.com/os/antv/assets/lib/d3-4.13.0.min.js"></script>
<script type="text/babel">
  const { Tree, NodeMapper, EdgeMapper, G6 } = window.ReactG6;
  const { forceSimulation, forceLink, forceManyBody, forceY } = d3;
  const Util = G6.Util;

  const Mapper = G6.Plugins['tool.d3.mapper'];
  const nodeSizeMapper = new Mapper('node', '办学层次', 'color', ['#4BA4C4', '#F0D79F', '#FF8B33']);

  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: props.data
      };
      this.layout = this.layout.bind(this);
      this.tryHideLabel = this.tryHideLabel.bind(this);
      this.onCanvasMouseenter = this.onCanvasMouseenter.bind(this);
      this.onCanvasMouseleave = this.onCanvasMouseleave.bind(this);
      this.onDragstart = this.onDragstart.bind(this);
      this.onDrag = this.onDrag.bind(this);
      this.onDragend = this.onDragend.bind(this);
      this.onNodeMouseenter = this.onNodeMouseenter.bind(this);
      this.onNodeMouseleave = this.onNodeMouseleave.bind(this);
    }
  
    layout(...args) {
      const [,tree] = args;
      const nodes = tree.getNodes().map(function(node) {
        return node.getModel();
      });
      const edges = tree.getEdges().map(function(edge) {
        return Util.mix({}, edge.getModel());
      });
      this.simulation && this.simulation.stop();
      this.simulation = forceSimulation(nodes).force('charge', forceManyBody()).force('link', forceLink(edges).id(function(d) {
        return d.id;
      }).distance(20).strength(1)).force('y', forceY()).on('tick', function() {
        tree.updateNodePosition();
      });
    }
  
    // 鼠标移入节点显示 label
    tryHideLabel(node) {
      const model = node.getModel();
      const label = node.getLabel();
      const labelBox = label.getBBox();
      if (labelBox.maxX - labelBox.minX > model.size) {
        label.hide();
        this.tree.draw();
      }
    }
  
    onDragstart() {
      this.tree.css({
        cursor: '-webkit-grabbing'
      });
    }
  
    onDrag(ev) {
      if (this.lastPoint) {
        this.tree.translate(ev.domX - this.lastPoint.x, ev.domY - this.lastPoint.y);
      }
      this.lastPoint = {
        x: ev.domX,
        y: ev.domY
      };
    }
  
    onDragend() {
      this.lastPoint = undefined;
      this.tree.css({
        cursor: '-webkit-grab'
      });
    }
  
    onCanvasMouseenter() {
      this.tree.css({
        cursor: '-webkit-grabbing'
      });
    }
  
    onCanvasMouseleave() {
      this.lastPoint = undefined;
    }
  
    onNodeMouseenter(ev) {
      const item = ev.item;
      this.tree.toFront(item);
      item.getLabel().show();
      this.tree.draw();
    }
  
    onNodeMouseleave(ev) {
      const item = ev.item;
      this.tryHideLabel(item);
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic" style={{ background: '#0F141F' }}>
            <Tree
              height={window.innerHeight}
              data={this.state.data}
              plugins={[nodeSizeMapper]}
              layout={this.layout}
              onGetG6Instance={tree => this.tree = tree}
              onDragstart={this.onDragstart}
              onDrag={this.onDrag}
              onDragend={this.onDragend}
              onCanvasMouseleave={this.onCanvasMouseleave}
              onCanvasMouseenter={this.onCanvasMouseenter}
              onNodeMouseenter={this.onNodeMouseenter}
              onNodeMouseleave={this.onNodeMouseleave}
            >
              <NodeMapper 
                style={() => ({
                  stroke: null
                })}
                size={10}
                label={model => model.name}
              />
              <EdgeMapper 
                style={() => ({
                  strokeOpacity: 0.6
                })}
              />
            </Tree>
          </div>
        </div>
      );
    }
  
    componentDidMount() {
      this.tree.translate(this.tree.getWidth() / 2, this.tree.getHeight() / 2);
      const nodes = this.tree.getNodes();
  
      nodes.forEach(node => {
        this.tryHideLabel(node);
      });
    }
  
    componentWillUnmount() {
      this.simulation.stop();
      this.simulation = null;
    }
  }

  $.getJSON('/data/university.json', function(data) {
    ReactDOM.render(<Demo data={data}/>, document.getElementById('mountNode'));
  });
</script>`
    },
  }
}