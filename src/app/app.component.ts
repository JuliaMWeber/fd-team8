//import { Component } from '@angular/core';
import { Component, HostBinding } from '@angular/core';

//neu
import {
  trigger, state, style, animate, transition, query, group
 } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    //animation triggers go here
    
  ]
})
export class AppComponent {
  title = 'untitled4';
}
