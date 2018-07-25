import React from 'react';
import PropTypes from 'prop-types';

class BaseComponent extends React.Component {
  static contextTypes = {
    addElement: PropTypes.func,
    updateElement: PropTypes.func,
    deleteElement: PropTypes.func,
    createId: PropTypes.func,
    getParentInfo: PropTypes.func
  }

  static childContextTypes = {
    addElement: PropTypes.func,
    updateElement: PropTypes.func,
    deleteElement: PropTypes.func,
    createId: PropTypes.func,
    getParentInfo: PropTypes.func
  }

  constructor(props, name) {
    super(props);
    this.name = name;
  }

  getChildContext() {
    return {
      addElement: this.context.addElement,
      updateElement: this.context.updateElement,
      deleteElement: this.context.deleteElement,
      createId: this.context.createId,
      getParentInfo: this.getParentInfo
    };
  }

  componentWillMount() {
    const context = this.context;
    this.id = context.createId();
    context.addElement(
      this.name, this.id, this.props,
      context.getParentInfo()
    );
  }

  componentWillReceiveProps(nextProps) {
    this.context.updateElement(
      this.name, this.id, nextProps,
      this.context.getParentInfo()
    );
  }

  getParentInfo = () => {
    return {
      id: this.id,
      name: this.name
    };
  }

  render() {
    let children = this.props.children;

    if (children) {
      if (children.length) {
        children = <div>{ children }</div>;
      }
    } else {
      children = null;
    }

    return children;
  }
}

function generateBaseTypedComponent(name) {
  class TypedComponent extends BaseComponent {
    static contextTypes = {
      addElement: PropTypes.func,
      updateElement: PropTypes.func,
      deleteElement: PropTypes.func,
      createId: PropTypes.func,
      getParentInfo: PropTypes.func
    }

    static childContextTypes = {
      addElement: PropTypes.func,
      updateElement: PropTypes.func,
      deleteElement: PropTypes.func,
      createId: PropTypes.func,
      getParentInfo: PropTypes.func
    }

    constructor(props) {
      super(props, name);
    }

    getChildContext() {
      return {
        addElement: this.context.addElement,
        updateElement: this.context.updateElement,
        deleteElement: this.context.deleteElement,
        createId: this.context.createId,
        getParentInfo: this.getParentInfo
      };
    }
  }

  return TypedComponent;
}

BaseComponent.generateBaseTypedComponent = generateBaseTypedComponent;

export default BaseComponent;
