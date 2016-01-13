import { patch } from 'incremental-dom';
import { render } from './jdom.js';
import _ from 'lodash';

export let defineComponent = (function() {
  var Component = function(spec) {
    _.each(spec, (value, key) => {
      this[key] = value;
    });

    this.update();
  };
  Component.prototype = {};
  Component.prototype.constructor = Component;
  Component.prototype.componentReceivingProps = function() {};
  Component.prototype.componentWillUpdate = function() {};
  Component.prototype.componentDidUpdate = function() {};
  Component.prototype.componentShouldUpdate = function(newProps, oldProps) {
    return !_.isEqual(newProps, oldProps);
  };
  Component.prototype.update = function() {
    render(this);
  };
  Component.prototype.setProps = function(newProps) {
    var self = this;

    self.componentReceivingProps(newProps);

    _.each(newProps, function(value, key) {
      self.props[key] = value;
    });

    if (self.componentShouldUpdate(newProps, self.props)) {
      self.componentWillUpdate();
      self.update();
      self.componentDidUpdate();
    }
  };

  function defineComponent(spec) {
    var
    componentClass = Component,
    prototype = Object.create(Component.prototype);

    _.each(spec, function(value, key) {
      prototype[key] = value;
    });
    if (!prototype.props) prototype.props = {};

    componentClass.prototype = prototype;

    return componentClass;
  }

  return defineComponent;
})();
