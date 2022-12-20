import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { OnepagerComponent } from './onepager/onepager.component';
import { EscaperoomComponent } from './escaperoom/escaperoom.component';
import { HeaderComponent } from './header/header.component';
import { VorstellungComponent } from './vorstellung/vorstellung.component';
import { SpielregelnComponent } from './spielregeln/spielregeln.component';
import { ErklaerungComponent } from './erklaerung/erklaerung.component';

const appRoutes: Routes=[
  {path: 'start', component: OnepagerComponent},
  {path: 'escape', component: EscaperoomComponent},
  {path: '', redirectTo: '/start', pathMatch:'full'}
]
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
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
