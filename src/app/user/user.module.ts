import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from '../home/register/create-user.component';
import { CoachOverviewComponent } from './find-coach/coach-overview.component';
import { UserDetailComponent } from './my-profile/profile-information/user-detail.component';
import { ApplyForCoachComponent } from './my-profile/apply-to-become-coach/apply-for-coach.component';
import { UserLoginComponent } from '../home/login/user-login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {UserRoutingModule} from "./user-routing/user-routing.module";
import { UserPanelComponent } from './my-profile/user-panel.component';
import { LeftTabComponent } from './my-profile/left-tab/left-tab.component';
import { MyCoachInformationComponent } from './my-coach-profile/my-coach-information/my-coach-information.component';
import { MyCoachingTopicsComponent } from './my-coach-profile/my-coaching-topics/my-coaching-topics.component';
import { MyCoachProfileTabComponent } from './my-coach-profile/my-coach-profile/my-coach-profile-tab.component';
import {FilterTopicsPipe} from "../pipes/filter-topics.pipe";
import {FilterFirstNameLastNameEmailPipe} from "../pipes/filter-first-name-last-name-email.pipe";
import {MyCoachProfileComponent} from "./my-coach-profile/my-coach-profile";
import { EditMyProfileComponent } from './my-profile/edit-my-profile/edit-my-profile.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    CoachOverviewComponent,
    UserDetailComponent,
    ApplyForCoachComponent,
    MyCoachProfileComponent,
    UserLoginComponent,
    UserPanelComponent,
    LeftTabComponent,
    MyCoachInformationComponent,
    MyCoachingTopicsComponent,
    MyCoachProfileTabComponent,
    FilterTopicsPipe,
    FilterFirstNameLastNameEmailPipe,
    EditMyProfileComponent,
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        UserRoutingModule,
    ],
  exports: [
    FilterTopicsPipe,
    FilterFirstNameLastNameEmailPipe,
    MyCoachInformationComponent,
    MyCoachingTopicsComponent
  ],
})
export class UserModule { }
