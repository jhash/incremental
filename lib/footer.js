import { render } from './jdom.js';

export function footer() {
  render(tag);
}

var
value = 0,
tag = {
  type: 'div',
  id: 'footer',
  props: {
    textBefore: 'Hello there'
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
