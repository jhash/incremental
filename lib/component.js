import { patch } from 'incremental-dom'
import { render } from './jdom.js'

class Component {
  constructor(extensions) {
    Object.assign(this, this.getInitialState(), extensions);
  }
  getInitialState() {
    return {};
  }
  setProps(newProps) {
    Object.assign(this.props, newProps);
    this.render();
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
