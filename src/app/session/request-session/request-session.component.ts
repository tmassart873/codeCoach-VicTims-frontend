import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-request-session',
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit {

  requestSessionForm = this.formBuilder.group({
      date: new FormControl('', [
        Validators.required,
      ]),
      time: new FormControl('', [
        Validators.required,
      ])
    }
  );

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}
