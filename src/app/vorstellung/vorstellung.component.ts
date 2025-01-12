import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, group } from '@angular/animations';

@Component({
  selector: 'app-vorstellung',
  templateUrl: './vorstellung.component.html',
  animations: [
    trigger('fadeIn', [
    
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translate(0, 0)'}),
        animate('2500ms', style({ opacity: 0, transform: 'translate(-200px, 0'}))
      ])
    ]),
    /*
    trigger('fadeInImg', [
    
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s 1500ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translate(0, 0)'}),
        animate('0.2s 1500ms ease-in-out' , style({ opacity: 0, transform: 'translate(-200px, 0'}))
      ])
    ]),
    */

  ]
})

export class VorstellungComponent {

}
