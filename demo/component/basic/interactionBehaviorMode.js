import React from 'react';
import { Graph, NodeMapping, EdgeMapping, G6 } from 'react-g6';

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

export default class InteractionBehaviorMode extends React.Component {
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
            <NodeMapping label={model => model.id}/>
            <EdgeMapping style={() => ({ endArrow: true })}/>
          </Graph>
        </div>
      </div>
    );
  }
}
