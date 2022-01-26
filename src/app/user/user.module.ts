import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { CoachOverviewComponent } from './user-coach-overview/coach-overview.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ApplyForCoachComponent } from './apply-for-coach/apply-for-coach.component';
import { CoachDetailComponent } from './user-coach-detail/coach-detail.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {UserRoutingModule} from "./user-routing/user-routing.module";
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import {AppModule} from "../app.module";

@NgModule({
  declarations: [
    CreateUserComponent,
    CoachOverviewComponent,
    UserDetailComponent,
    ApplyForCoachComponent,
    CoachDetailComponent,
    UserLoginComponent,
    UserPanelComponent,
    UserSidebarComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        UserRoutingModule,
        AppModule
    ]
})
export class UserModule { }
