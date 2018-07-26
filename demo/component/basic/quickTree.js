import React from 'react';
import { Tree } from 'g6-for-react';

export default class QuickTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        roots: [{
          label: 'root',
          children: [{
            label: 'child1',
            children: [{
              label: 'child\n1.1'
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
