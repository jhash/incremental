import { elementOpenStart, elementOpenEnd, attr, elementClose, text, attributes } from 'incremental-dom';
import { formatText } from './text.js';

function renderChildComponents(tag) {
  _.each(tag.children, function(child) {
    if (_.isFunction(child.render)) {
      console.log('child render');
      child.render();
    } else {
      console.log('render child');
      render(child);
    }
  });
}

function renderTextAndChildren(tag) {
  var
  tagProps = tag.props,
  tagText = _.get(tagProps, 'textBefore') || _.get(tagProps, 'text'),
  tagTextFormatter = _.get(tagProps, 'textFormatter', function(str) { return str; }),
  tagTextFormatterWrapper = function(str) {
    return tagTextFormatter(str, tagProps);
  };

  if (_.isString(tagText)) text(formatText(tagText, tagProps), tagTextFormatterWrapper);

  renderChildComponents(tag);

  tagText = _.get(tagProps, 'textAfter');
  if (_.isString(tagText)) text(formatText(tagText, tagProps), tagTextFormatterWrapper);
}

function openElement(tag, tagType) {
  elementOpenStart(tagType, _.get(tag, 'id', null), _.get(tag, 'staticProps', null));

    _.each(tag.props, function(prop, key) {
      attr(key, prop);
    });

  elementOpenEnd(tagType);
}

export function render(tag) {
  if (!tag) return;

  let tagType = tag.type || 'div';

  openElement(tag, tagType);

  renderTextAndChildren(tag);

  elementClose(tagType);
}
