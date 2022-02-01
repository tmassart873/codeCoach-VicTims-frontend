import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreateUserComponent} from "../app/home/register/create-user.component";
import {HomepageComponent} from "../app/home/homepage/homepage.component";
import {UserLoginComponent} from "../app/home/login/user-login.component";
import {UserRoutingModule} from "../app/user/user-routing/user-routing.module";
import {UserDetailComponent} from "../app/user/my-profile/profile-information/user-detail.component";
import {UserPanelComponent} from "../app/user/my-profile/user-panel.component";
import {ApplyForCoachComponent} from "../app/user/my-profile/apply-to-become-coach/apply-for-coach.component";
import {CoachOverviewComponent} from "../app/user/find-coach/coach-overview.component";
import {MyCoachProfileComponent} from "../app/user/my-coach-profile/my-coach-profile";
import {CoachComponent} from "../app/coach/coach.component";
import {RequestSessionComponent} from "../app/session/request-session/request-session.component";
import {EditMyProfileComponent} from "../app/user/my-profile/edit-my-profile/edit-my-profile.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: CreateUserComponent},
  {path: 'users/coaches-overview', component: CoachOverviewComponent},
  {path: 'users/:id/my-coach-profile', component: MyCoachProfileComponent},
  {path: 'users/:id/coach-profile', component: CoachComponent},
  {path: 'users/:id', component: UserPanelComponent, children: [
      {path: 'profile', component: UserDetailComponent},
      {path: 'edit-my-profile', component: EditMyProfileComponent},
      {path: 'become-coach', component: ApplyForCoachComponent}
    ]},
  {path: 'sessions/request-session', component: RequestSessionComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), UserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
