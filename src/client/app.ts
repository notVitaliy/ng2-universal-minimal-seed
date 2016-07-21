import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app',
  providers: [  ],
  directives: [ ...ROUTER_DIRECTIVES ],
  styles: [`
    .router-link-active {
      background-color: red;
    }
  `],
  template: `
    <nav>
      <div><a [routerLink]=" ['./'] ">Index</a></div>
      <div><a [routerLink]=" ['./home'] ">Home</a></div>
      <div><a [routerLink]=" ['./home/test'] ">Home/test</a></div>
      <div><a [routerLink]=" ['./home/test/123'] ">Home/test/123</a></div>
      <div><a [routerLink]=" ['./home/test/456'] ">Home/test/456</a></div>
      <div><a [routerLink]=" ['./about'] ">About</a></div>
      <div><a [routerLink]=" ['./about/foo'] ">About/foo</a></div>
      <div><a [routerLink]=" ['./about/foo/bar'] ">About/foo/bar</a></div>
      <div><a [routerLink]=" ['./about/foo/cat'] ">About/foo/cat</a></div>
      <div><a [routerLink]=" ['./about/foo/cat/meow'] ">About/foo/cat/meow</a></div>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {
  constructor() {

  }
}