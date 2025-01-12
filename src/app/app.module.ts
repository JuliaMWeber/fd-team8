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
import { FooterComponent } from './footer/footer.component';
import { ErRechtsComponent } from './er-rechts/er-rechts.component';
import { ErLinksComponent } from './er-links/er-links.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuellenComponent } from './quellen/quellen.component';
import { EndpageComponent } from './endpage/endpage.component';

const appRoutes: Routes=[
  {path: 'start', component: OnepagerComponent},
  {path: 'escape', component: EscaperoomComponent},
  {path: "rechts", component: ErRechtsComponent},
  {path: "links", component: ErLinksComponent},
  {path: '', redirectTo: '/start', pathMatch:'full'},
  {path: 'endpage', component: EndpageComponent},
  {path: 'quellen', component: QuellenComponent}
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
    FooterComponent,
    ErRechtsComponent,
    ErLinksComponent,
    QuellenComponent,
    EndpageComponent
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
