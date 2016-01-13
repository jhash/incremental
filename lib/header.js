import { render } from './jdom.js';

function onClick() {
  console.log('Hey there');
  value++;
  console.log(value);
}

export function header() {
  render(tag);
}

var
value = 0,
tag = {
  type: 'div',
  id: 'header',
  staticPropertyArray: [],
  props: {
    onclick: onClick,
    value: value,
    textBefore: 'Hello there',
  },
  children: [
    {
      type: 'h2',
      props: {
        text: 'Sir testerson'
      },
      children: [
        {
          type: 'div',
          props: {
            text: 'Testing'
          }
        }
      ]
    }
  ]
};
