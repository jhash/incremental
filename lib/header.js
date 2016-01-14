import { Component } from './component.js';
import elements, { el } from './elements.js';

let
h1 = elements.h1,
h2 = elements.h2,
div = elements.div;

class Header extends Component {
  componentShouldUpdate(newProps, oldProps) {
    return newProps.value !== oldProps.value;
  }
  getInitialState() {
    return {
      type: 'div',
      staticProps: [],
      props: {
        onclick: () => {
          this.setProps({ value: this.props.value + 1 });
        },
        value: 0
      },
      children: [
        'Hello there {{ value }}',
        h1({ id: 'header_title_first', children: [ 'Bonjour' ] }),
        h1({ id: 'header_title_second', children: [ 'Here is some text' ] }),
        h2({
          id: 'header_title_third',
          children: [
            'Sir testerson',
            div({
              id: 'header_subtitle',
              children: [
                'Testing',
                el({ type: 'img', children: ['Last test'], props: { src: 'http://www.w3schools.com/tags/smiley.gif' } })
              ]
            }),
            'Bye Mr. Testerson'
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
