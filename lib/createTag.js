import { render } from './jdom.js';
import _ from 'lodash';

export let Tag = (function() {
  var Tag = function(tag) {
    var self = this;

    _.each(tag, function(value, key) {
      self[key] = value;
    });

    if (!self.props) self.props = {};
  };

  Tag.prototype = {};
  Tag.prototype.constructor = Tag;
  Tag.prototype.componentReceivingProps = function() {};
  Tag.prototype.componentWillUpdate = function() {};
  Tag.prototype.componentDidUpdate = function() {};
  Tag.prototype.componentShouldUpdate = function(newProps, oldProps) {
    return !_.isEqual(newProps, oldProps);
  };
  Tag.prototype.update = function() {
    render(this);
  };
  Tag.prototype.setProps = function(newProps) {
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

  return Tag;
})();
