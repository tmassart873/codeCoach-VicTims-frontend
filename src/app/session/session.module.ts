import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequestSessionComponent} from './request-session/request-session.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RequestSessionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ]
})
export class SessionModule {
}
