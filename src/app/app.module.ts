import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from "@angular/router";

//neu
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { OnepagerComponent } from './onepager/onepager.component';
import { EscaperoomComponent } from './escaperoom/escaperoom.component';
import { HeaderComponent } from './header/header.component';
import { VorstellungComponent } from './vorstellung/vorstellung.component';
import { SpielregelnComponent } from './spielregeln/spielregeln.component';
import { ErklaerungComponent } from './erklaerung/erklaerung.component';
import { ErRechtsComponent } from './er-rechts/er-rechts.component';
import { ErLinksComponent } from './er-links/er-links.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuellenComponent } from './quellen/quellen.component';

const appRoutes: Routes=[
  {path: 'start', component: OnepagerComponent},
  {path: 'escape', component: EscaperoomComponent},
  {path: "rechts", component: ErRechtsComponent},
  {path: "links", component: ErLinksComponent},
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
    ErklaerungComponent,
    ErRechtsComponent,
    ErLinksComponent,
    QuellenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    ),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
