import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { App } from './app';
import { routes } from './app.routes';

export function main() {
  return bootstrap(App, [
    ...HTTP_PROVIDERS,
    provideRouter(routes, {enableTracing: true})
  ]);
}
