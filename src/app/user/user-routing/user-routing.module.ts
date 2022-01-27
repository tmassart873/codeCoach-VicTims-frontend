import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailComponent} from "../user-detail/user-detail.component";
import {ApplyForCoachComponent} from "../apply-for-coach/apply-for-coach.component";

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
