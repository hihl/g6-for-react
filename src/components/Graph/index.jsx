import React from 'react';
import Empty from '../empty';
import PureGraph from './pureGraph';

function hasSource(source) {
  return !!source && !!source.length;
}

export default class Gragh extends (React.PureComponent || React.Component) {
  getG6Instance() {
    return this.graph;
  }

  _refCallback = g => {
    if (g) {
      this.graph = g.getG6Instance();
    }
  };

  render() {
    const { data, width, height, className, style, placeholder } = this.props;

    return (
      <div className={className} style={style}>
        {
          (hasSource(data) || !placeholder) ? <PureGraph ref={this._refCallback} {...this.props} /> : (
            <Empty
              width={width}
              height={height}
              placeholder={placeholder === true ? undefined : placeholder}
            />
          )
        }
      </div>
    );
  }
}
