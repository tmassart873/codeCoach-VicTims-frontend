import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoacheeDetailComponent} from "../user-coachee-detail/coachee-detail.component";
import {ApplyForCoachComponent} from "../apply-for-coach/apply-for-coach.component";

const userRoutes: Routes = [
  {path: 'profile', component: CoacheeDetailComponent},
  {path: 'become-coach', component: ApplyForCoachComponent}
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
