// the polyfills must be the first thing imported
import 'angular2-universal/polyfills';

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { prebootComplete } from 'angular2-universal';

// enable prod for faster renders
enableProdMode();

import { main } from './browser';

// on document ready bootstrap Angular 2
document.addEventListener('DOMContentLoaded', () => {

  main()
    .then(prebootComplete);

});
