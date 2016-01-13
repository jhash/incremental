import { patch } from 'incremental-dom'
import { render } from './jdom.js'

class Component {
  constructor(spec) {
    if (spec) Object.assign(this, spec);
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
