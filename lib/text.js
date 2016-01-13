function interpolateString(str, props) {
  var toInterpolate = str.match(/{{([^{}]*)}}/g);
  _.each(toInterpolate, (string) => {
    str = str.replace(string, _.get(props, string.replace(/{{|}}/g, '').trim()));
  });
  return str;
}

function formatText(str, props) {
  if (_.isUndefined(str)) return null;
  // TODO - localize here
  return interpolateString(str, props);
}

export {
  interpolateString,
  formatText
};
