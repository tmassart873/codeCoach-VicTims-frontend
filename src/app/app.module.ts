import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CreateUserComponent} from "./user/create-user/create-user.component";
import {ApplyForCoachComponent} from "./user/apply-for-coach/apply-for-coach.component";
import {CoacheeDetailComponent} from "./user/user-coachee-detail/coachee-detail.component";
import {CoachOverviewComponent} from "./user/user-coach-overview/coach-overview.component";
import {CoachDetailComponent} from "./user/user-coach-detail/coach-detail.component";
import {LayoutModule} from "../layout/layout.module";
import {UserModule} from "./user/user.module";
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./service/user.service";
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    UserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
