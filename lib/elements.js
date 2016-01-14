import { Component } from './component.js';

// Courtesy of auth0: https://auth0.com/blog/2015/10/23/incremental-dom/
var
TAGS = ['div', 'span', 'ul', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
elements = TAGS.reduce((prev, tagType) => {
  prev[tagType] = (extensions) => {
    return new Component(Object.assign({ type: tagType }, extensions));
  }

  return prev;
}, {});

export default elements;
