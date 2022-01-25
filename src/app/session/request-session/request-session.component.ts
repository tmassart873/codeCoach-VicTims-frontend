import {Component, OnInit} from '@angular/core';

import {UserService} from "../../service/user.service";
import {SessionService} from "../../service/session.service";
import {FormBuilder, FormControl, Validators,} from "@angular/forms";

@Component({
  selector: 'app-request-session',
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit {
  private coacheeId = this.userService.user.subscribe(user => user.id);
  private coachId = this.userService.getSelectedCoachId();

  requestSessionForm = this.formBuilder.group({
      coacheeId: `${this.coacheeId}`,
      coachId: `${this.coachId}`,
      subject: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required
      ]),
      time: new FormControl('', [
        Validators.required
      ]),
      location: new FormControl('', [
        Validators.required
      ]),
      remarks: new FormControl('', [
        Validators.required
      ])
    }
  );
  constructor(private formBuilder: FormBuilder, private sessionService: SessionService,private userService: UserService) {
  }

  ngOnInit(): void {
  }
  createSession(){
    this.sessionService.requestSession(this.requestSessionForm.value).subscribe();
  }
  onSubmit(){
    this.createSession();
  }


}
