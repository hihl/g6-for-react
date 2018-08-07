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
    }
  }
});

/***/ })

};
//# sourceMappingURL=main.9fcfa60e2a46f808ddf8.hot-update.js.map