import { bootstrap } from './bootstrap.js';
bootstrap();

import { patch } from 'incremental-dom';
import { header } from './header.js';

function appWrapper() {
  header().renderTo(document.body);
}

appWrapper();
