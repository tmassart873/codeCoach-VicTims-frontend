import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreateUserComponent} from "../app/user/create-user/create-user.component";
import {HomepageComponent} from "../app/homepage/homepage.component";
import {UserLoginComponent} from "../app/user/user-login/user-login.component";
import {UserRoutingModule} from "../app/user/user-routing/user-routing.module";
import {UserDetailComponent} from "../app/user/user-detail/user-detail.component";
import {UserPanelComponent} from "../app/user/user-panel/user-panel.component";
import {ApplyForCoachComponent} from "../app/user/apply-for-coach/apply-for-coach.component";
import {CoachDetailComponent} from "../app/user/user-coach-detail/coach-detail.component";
import {CoachOverviewComponent} from "../app/user/user-coach-overview/coach-overview.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: CreateUserComponent},
  {path: 'users/coaches-overview', component: CoachOverviewComponent},
  {path: 'users/:id/coach-profile', component: CoachDetailComponent},
  {path: 'users/:id', component: UserPanelComponent, children: [
      {path: 'profile', component: UserDetailComponent},
      {path: 'become-coach', component: ApplyForCoachComponent}
    ]},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), UserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
