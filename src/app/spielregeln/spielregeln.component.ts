//import { animate, transition } from '@angular/animations';
import { Component } from '@angular/core';

import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-spielregeln',
  templateUrl: './spielregeln.component.html',

  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity:0}),
        animate('2500ms', style({opacity:1}))
      ]),
      transition(':leave', [
        style({opacity:1}),
        animate('2500ms', style({opacity:0}))
      ])
    ])
  ]
  
/*
  animations: [
    trigger('fade', [ 
      transition(':enter', [
        style({opacity:0}),
        animate(1000, style({opacity:1}))
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate(1000, style({opacity:0}))
      ] )
    ])
  ]
  */
})

export class SpielregelnComponent {

}
