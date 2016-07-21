import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  template: `
    About {{text}}
  `
})
export class About implements OnInit {
  private text: string = 'ABOUT - ';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id']
        ? params['id']
        : 'N/A';
      
      let name = params['name']
        ? params['name']
        : 'N/A';

      let foo = params['foo']
        ? params['foo']
        : 'N/A';
      
      
      this.text += `${id} - ${name} - ${foo}`;
    });
  }
 
}
