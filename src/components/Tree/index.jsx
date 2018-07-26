import React from 'react';
import Empty from '../empty';
import PureTree from './pureTree';

function hasSource(source) {
  return !!source && !!source.length;
}

export default class Tree extends (React.PureComponent || React.Component) {
  getG6Instance() {
    return this.tree;
  }

  _refCallback = g => {
    if (g) {
      this.tree = g.getG6Instance();
    }
  };

  render() {
    const { data, width, height, className, style, placeholder } = this.props;

    return (
      <div className={className} style={style}>
        {
          (hasSource(data) || !placeholder) ? <PureTree ref={this._refCallback} {...this.props} /> : (
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
