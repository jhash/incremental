import { patch } from 'incremental-dom'
import { render } from './jdom.js'

class Component {
  constructor(extensions) {
    Object.assign(this, this.getInitialState(), extensions);
  }
  getInitialState() {
    return {};
  }
  componentUpdated() {}
  componentWillReceiveProps(newProps) {}
  componentShouldUpdate(newProps, oldProps) {
    return true;
  }
  setProps(newProps) {
    this.componentWillReceiveProps(newProps);
    // TODO - store each elements container?
    // Don't render without container to patch
    let shouldUpdate = this.container && this.componentShouldUpdate(newProps, this.props);
    Object.assign(this.props, newProps);
    if (shouldUpdate) {
      this.render();
      this.componentUpdated();
    }
  }
  render() {
    if (this.container) {
      patch(this.container, render.bind(this, this));
    } else {
      render(this);
    }
  }
  renderTo(container) {
    this.container = container;
    this.render();
  }
}

export {
  Component
};
