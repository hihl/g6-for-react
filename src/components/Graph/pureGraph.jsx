import React from 'react';
import PropTypes from 'prop-types';
import Processor from '../../processor/GraphProcessor';

export default class PureGraph extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
    fitView: PropTypes.string,
    fitViewPadding: PropTypes.string,
    animate: PropTypes.bool,
    minZoom: PropTypes.number,
    maxZoom: PropTypes.number,
    models: PropTypes.object,
    model: PropTypes.string
  };

  static childContextTypes = {
    addElement: PropTypes.func,
    updateElement: PropTypes.func,
    deleteElement: PropTypes.func,
    createId: PropTypes.func,
    getParentInfo: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.name = 'Graph';
    this.gId = 0;
    this.id = this.createId();
    this.g6Processor = new Processor();
  }

  getChildContext() {
    return {
      addElement: this.addElement,
      updateElement: this.updateElement,
      deleteElement: this.deleteElement,
      createId: this.createId,
      getParentInfo: this.getParentInfo
    };
  }

  componentDidMount() {
    this.addElement(
      this.name,
      this.id,
      {
        ...this.props,
        container: this.containerWrap
      }
    );
    this.graph = this.g6Processor.createInstance();
    this.notifyG6Instance();
  }

  componentDidUpdate() {
    this.updateElement(
      this.name,
      this.id,
      {
        ...this.props,
        container: this.containerWrap
      }
    );
    const newGraph = this.g6Processor.batchedUpdate();
    if (this.graph !== newGraph) {
      this.graph = newGraph;
      this.notifyG6Instance();
    }
  }

  componentWillUnmount() {
    this.g6Processor.destroy();
    this.graph = null;
    this.containerWrap = null;
  }

  getG6Instance() {
    return this.graph;
  }

  createId = () => {
    this.gId += 1;
    return this.gId;
  };

  getParentInfo = () => {
    return {
      id: this.id,
      name: this.name
    };
  }

  addElement = (name, id, props, parentInfo) => {
    return this.g6Processor.addElement(name, id, props, parentInfo);
  };

  updateElement = (name, id, props, parentInfo) => {
    this.g6Processor.updateElement(name, id, props, parentInfo);
  }

  deleteElement = (name, id, parentInfo) => {
    this.g6Processor.deleteElement(name, id, parentInfo);
  }

  notifyG6Instance() {
    if (this.props.onGetG6Instance) {
      this.props.onGetG6Instance(this.graph);
    }
  }

  refHandle = (cw) => {
    // chart container wrap for reset operation
    if (!this.containerWrap) {
      this.containerWrap = cw;
    }
  }

  render() {
    return <div ref={this.refHandle}>{this.props.children}</div>;
  }
}
