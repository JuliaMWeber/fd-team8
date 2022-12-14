import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnepagerComponent } from './onepager/onepager.component';
import { EscaperoomComponent } from './escaperoom/escaperoom.component';
import { HeaderComponent } from './header/header.component';
import { VorstellungComponent } from './vorstellung/vorstellung.component';
import { SpielregelnComponent } from './spielregeln/spielregeln.component';
import { ErklaerungComponent } from './erklaerung/erklaerung.component';

@NgModule({
  declarations: [
    AppComponent,
    OnepagerComponent,
    EscaperoomComponent,
    HeaderComponent,
    VorstellungComponent,
    SpielregelnComponent,
    ErklaerungComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
