import { Component } from './component.js';

class Header extends Component {
  getInitialState() {
    return {
      type: 'div',
      id: 'header',
      staticPropertyArray: [],
      props: {
        onclick: () => {
          this.setProps({ value: this.props.value + 1 });
        },
        value: 0,
        textBefore: 'Hello there {{ value }}'
      },
      children: [
        new Component({ type: 'h1', id: 'header_title_first', props: { text: 'Bonjour' }}),
        {
          type: 'h2',
          id: 'header_title',
          props: {
            text: 'Sir testerson'
          },
          children: [
            {
              type: 'div',
              id: 'header_subtitle',
              props: {
                text: 'Testing'
              }
            }
          ]
        }
      ]
    };
  }
}

export {
  Header
};
