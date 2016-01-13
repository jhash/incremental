import { bootstrap } from './bootstrap.js';
bootstrap();

import { patch } from 'incremental-dom';
import { header } from './header.js';
import { footer } from './footer.js';

function appWrapper() {
  header();
  footer();
}

patch(document.getElementById('app'), appWrapper);
