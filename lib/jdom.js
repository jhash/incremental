import { elementOpenStart, elementOpenEnd, attr, elementClose, text, attributes } from 'incremental-dom';
import { formatText } from './text.js';

export function render(tag) {
  if (!tag) return;

  let tagType = tag.type || 'div';

  elementOpenStart(tagType, _.get(tag, 'id', null), _.get(tag, 'staticPropertyArray', null));

    _.each(tag.props, function(prop, key) {
      attr(key, prop);
    });

  elementOpenEnd(tagType);

    var
    tagProps = tag.props,
    tagText = _.get(tagProps, 'textBefore') || _.get(tagProps, 'text'),
    tagTextFormatter = _.get(tagProps, 'textFormatter', function(str) { return str; }),
    tagTextFormatterWrapper = function(str) {
      return tagTextFormatter(str, tagProps);
    };

    if (_.isString(tagText)) text(formatText(tagText, tagProps), tagTextFormatterWrapper);

    _.each(tag.children, function(child) {
      render(child);
    });

    tagText = _.get(tagProps, 'textAfter');
    if (_.isString(tagText)) text(formatText(tagText, tagProps), tagTextFormatterWrapper);

  elementClose(tagType);
}
