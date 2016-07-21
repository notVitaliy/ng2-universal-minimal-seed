// the polyfills must be the first thing imported in node.js
import 'angular2-universal/polyfills';

import * as path from 'path';
import * as express from 'express';
import * as compression from 'compression';

import { enableProdMode } from '@angular/core';
import { expressEngine } from 'angular2-universal';
import { ngApp } from './main.node';

enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));
const docker_host = process.env.DOCKERHOST || 'localhost';

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

// Serve static images
app.use(compression());
app.use(express.static(ROOT, { index: false }));
app.use('/assets', express.static('./dist/client/assets'));
app.use('/dist/client/', express.static('./dist/client/'));

// Routes with html5pushstate
// ensure routes match client-side-app
app.get('/*', ngApp);

// use indexFile over ngApp only when there is too much load on the server
function indexFile(req, res) {
  // when there is too much load on the server just send
  // the index.html without prerendering for client-only
  res.sendFile('/index.html', {root: __dirname});
}

// Server
app.listen(3000, () => {
  console.log('Listening on: http://' + docker_host + ':3000');
});
