import React from 'react';
import Animate from './animate';

export default class BasicGraph extends React.Component {
  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Animate />
        </div>
      </div>
    );
  }
}