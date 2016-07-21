import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  template: `
    Home {{text}}
  `
})
export class Home implements OnInit {
  private text: string = 'HOME - ';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id']
        ? params['id']
        : 'N/A';
      
      let name = params['name']
        ? params['name']
        : 'N/A';
      
      
      this.text += `${id} - ${name}`;
    });
  }
 
}
