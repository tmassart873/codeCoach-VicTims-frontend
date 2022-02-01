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
import {CoacheeProfileComponent} from "./coachee/coachee-profile/coachee-profile.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ErrorComponent,
    CoacheeProfileComponent
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
  bootstrap: [AppComponent]
})

export class AppModule {
}
