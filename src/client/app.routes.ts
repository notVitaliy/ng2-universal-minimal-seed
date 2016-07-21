import { RouterConfig } from '@angular/router';

import { Home } from './home';
import { About } from './about';

export const routes: RouterConfig = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'home/:id', component: Home },
  { path: 'home/:id/:name', component: Home },
  { path: 'about', component: About },
  { path: 'about/:id', component: About },
  { path: 'about/:id/:name', component: About },
  { path: 'about/:id/:name/:foo', component: About }
];
