import { elementOpenStart, elementOpenEnd, attr, elementClose, text, attributes } from 'incremental-dom';

function defaultTextFormatter(str) {
  // TODO - localize here
  return str;
}

export function render(tag) {
  if (!tag) return;

  let tagType = tag.type || 'div';

  elementOpenStart(tagType, _.get(tag, 'id', null), _.get(tag, 'staticPropertyArray', null));

    _.each(tag.props, function(prop, key) {
      attr(key, prop);
    });

  elementOpenEnd(tagType);

    var
    tagText = _.get(tag, 'props.textBefore') || _.get(tag, 'props.text'),
    tagTextFormatter = _.get(tag, 'props.textFormatter', defaultTextFormatter);

    if (tagText) text(tagText, tagTextFormatter);

    _.each(tag.children, function(child) {
      render(child);
    });

    tagText = _.get(tag, 'props.textAfter');
    if (tagText) text(tagText, tagTextFormatter);

  elementClose(tagType);
}
