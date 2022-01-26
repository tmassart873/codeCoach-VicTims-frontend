import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {SessionService} from "../../service/session.service";
import {FormBuilder, FormControl, Validators,} from "@angular/forms";
import {Router} from "@angular/router";
import {InitService} from "../../materialize/init.service";
import {User} from "../../user/model/User";

@Component({
  selector: 'app-request-session',
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit {
  private user!: User|null;
  private coacheeId!: string | undefined;
  private coachId!: string|undefined;


  requestSessionForm = this.formBuilder.group({
      coacheeId: `${this.coacheeId}`,
      coachId: `${this.coachId}`,
      subject: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]{2}[\\/][0-9]{2}[\\/][0-9]{4}"),
      ]),
      time: new FormControl('', [
        Validators.required,
        Validators.pattern("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"),
      ]),
      location: new FormControl('', [
        Validators.required
      ]),
      remarks: '',
    }
  );

  constructor(private formBuilder: FormBuilder,
              private sessionService: SessionService,
              private userService: UserService,
              private initService: InitService,
              private router: Router) {
    this.user = this.userService.user;
  }

  ngOnInit(): void {
    this.initService.initSelect();
    this.coacheeId=this.user?.id;
    console.log('init coacheeid:'+this.coacheeId);
    this.coachId=this.userService.getSelectedCoachId();
    console.log('init coachid:'+this.coachId);
    // if(this.coacheeId===undefined||this.coacheeId===null||this.coachId===undefined||this.coachId===null){
    //   this.router.navigate(['']);
    // } <-- activate this when everything works
  }

  createSession() {
    this.requestSessionForm.patchValue({
      coachId: this.coachId,
      coacheeId: this.coacheeId
    });

    console.log(this.requestSessionForm.value);
    this.sessionService.requestSession(this.requestSessionForm.value).subscribe();

  }

  onSubmit() {
    this.createSession();
  }

  getFormAttribute(formControlName: string): any {
    return this.requestSessionForm.get(`${formControlName}`)
  }
}
