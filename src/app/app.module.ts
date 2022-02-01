import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LayoutModule} from "../layout/layout.module";
import {UserModule} from "./user/user.module";
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./service/user/user.service";
import {HomepageComponent} from './home/homepage/homepage.component';
import {AuthenticationInterceptor} from "./security/keycloak/authentication-interceptor";
import {ErrorComponent} from './security/error/error.component';
import {SessionModule} from "./session/session.module";
import { CoachComponent } from './coach/coach.component';
import { CoachInformationComponent } from './coach/coach-information/coach-information.component';
import { CoachingTopicsComponent } from './coach/coaching-topics/coaching-topics.component';
import { CoachProfileComponent } from './coach/coach-profile/coach-profile.component';
import { CoachSessionTabComponent } from './coach/coach-session-tab/coach-session-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ErrorComponent,
    CoachComponent,
    CoachInformationComponent,
    CoachingTopicsComponent,
    CoachProfileComponent,
    CoachSessionTabComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    UserModule,
    SessionModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
