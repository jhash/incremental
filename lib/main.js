import { bootstrap } from './bootstrap.js';
bootstrap();

import { patch } from 'incremental-dom';
import { Header } from './header.js';

function appWrapper() {
  var header = new Header();
  header.renderTo(document.body);
}

appWrapper();
