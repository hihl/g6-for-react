import React from 'react';
import Animate from './animate';
import QuickNet from './quickNet';

export default class BasicGraph extends React.Component {
  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Animate />
          <QuickNet />
        </div>
      </div>
    );
  }
}