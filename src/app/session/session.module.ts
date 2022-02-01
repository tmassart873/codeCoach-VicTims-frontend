import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {UserRoutingModule} from "../user/user-routing/user-routing.module";
import {RequestSessionComponent} from "./request-session/request-session.component";


@NgModule({
  declarations: [
    RequestSessionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class SessionModule {
}
