import { elementOpenStart, elementOpenEnd, attr, elementClose, text, attributes } from 'incremental-dom';
import { formatText } from './text.js';

function renderChildComponents(tag) {
  var
  tagProps = tag.props,
  tagTextFormatter = tag.textFormatter,
  tagTextFormatterWrapper = function(str) {
    if (_.isFunction(tagTextFormatter)) return tagTextFormatter(str, tagProps);
    return str;
  };

  _.each(tag.children, function(child) {
    if (_.isFunction(child.render)) {
      child.render();
    } else if (_.isString(child)) {
      text(formatText(child, tagProps), tagTextFormatterWrapper)
    }
  });
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

  renderChildComponents(tag);

  elementClose(tagType);
}
