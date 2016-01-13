import { bootstrap } from './bootstrap.js';
bootstrap();

import { patch } from 'incremental-dom';
import { Header } from './header.js';
import { footer } from './footer.js';
import { formatText } from './text.js';

function appWrapper() {
  var
  headerTag = {
    type: 'div',
    id: 'header',
    staticPropertyArray: [],
    props: {
      onclick: function() {
        ++header.props.value;
        header.render();
      },
      value: 0,
      textBefore: '{{ value }} Hello there {{ value }}'
    },
    children: [
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
  },
  header = new Header(headerTag);
  header.renderTo(document.body);
}

appWrapper();
