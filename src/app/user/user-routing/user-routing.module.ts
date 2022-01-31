import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailComponent} from "../my-profile/profile-information/user-detail.component";
import {ApplyForCoachComponent} from "../my-profile/apply-to-become-coach/apply-for-coach.component";

const userRoutes: Routes = [
  {path: 'profile', component: UserDetailComponent},
  {path: 'become-coach', component: ApplyForCoachComponent}
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
