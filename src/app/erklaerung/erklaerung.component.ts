import { Component } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-erklaerung',
  templateUrl: './erklaerung.component.html',

  animations: [
    trigger('fadeInEr', [
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
})
export class ErklaerungComponent {

}
