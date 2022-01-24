import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreateUserComponent} from "../app/user/create-user/create-user.component";
import {CoacheeDetailComponent} from "../app/user/user-coachee-detail/coachee-detail.component";
import {HomepageComponent} from "../app/homepage/homepage.component";
import {UserLoginComponent} from "../app/user/user-login/user-login.component";
import {UserProfileComponent} from "../app/user/user-profile/user-profile.component";

const routes: Routes=[
  {path: '', component: HomepageComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: CreateUserComponent},
  {path: 'users/:id/profile', component: UserProfileComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
