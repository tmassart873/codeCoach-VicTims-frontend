import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LayoutModule} from "../layout/layout.module";
import {UserModule} from "./user/user.module";
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./service/user.service";
import {HomepageComponent} from './homepage/homepage.component';
import {AuthenticationInterceptor} from "./security/keycloak/authentication-interceptor";
import { ErrorComponent } from './security/error/error.component';
import { FilterTopicsPipe } from './pipes/filter-topics.pipe';
import { FilterFirstNameLastNameEmailPipe } from './pipes/filter-first-name-last-name-email.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    LayoutModule,
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
