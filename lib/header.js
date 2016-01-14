import { Component } from './component.js';
import elements from './elements.js';

let
h1 = elements.h1,
h2 = elements.h2,
div = elements.div;

class Header extends Component {
  getInitialState() {
    return {
      type: 'div',
      id: 'header',
      staticProps: [],
      props: {
        onclick: () => {
          this.setProps({ value: this.props.value + 1 });
        },
        value: 0,
        textBefore: 'Hello there {{ value }}'
      },
      children: [
        h1({ id: 'header_title_first', props: { text: 'Bonjour' }}),
        h1({ id: 'header_title_second', props: { text: 'Here is some text' }}),
        h2({
          id: 'header_title_third',
          props: {
            text: 'Sir testerson'
          },
          children: [
            div({
              id: 'header_subtitle',
              props: {
                text: 'Testing'
              }
            })
          ]
        })
      ]
    };
  }
}

function header(extensions) {
  return new Header(extensions);
}

export {
  header
};
