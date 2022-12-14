import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { OnepagerComponent } from './onepager/onepager.component';
import { EscapeRoomComponent } from './escape-room/escape-room.component';
import { SpielregelnComponent } from './onepager/spielregeln/spielregeln.component';
import { ErklaerungenComponent } from './onepager/erklaerungen/erklaerungen.component';
import { VorstellungComponent } from './onepager/vorstellung/vorstellung.component';
import { HeaderComponent } from './onepager/header/header.component';
import { RaumLComponent } from './escape-room/raum-l/raum-l.component';
import { RaumMComponent } from './escape-room/raum-m/raum-m.component';
import { RaumRComponent } from './escape-room/raum-r/raum-r.component';
import { HauptraumComponent } from '.escape-room/hauptraum/hauptraum.component';


@NgModule({
  declarations: [
    AppComponent,
    OnepagerComponent,
    EscapeRoomComponent,
    SpielregelnComponent,
    ErklaerungenComponent,
    VorstellungComponent,
    HeaderComponent,
    RaumLComponent,
    RaumMComponent,
    RaumRComponent,
    HauptraumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'onepager', component: OnepagerComponent},
      {path: 'escape', component: EscapeRoomComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
