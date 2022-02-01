import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators,} from "@angular/forms";
import {Router} from "@angular/router";
import {InitService} from "../../materialize/init.service";
import {User} from "../../user/model/User";
import {SessionService} from "../../service/session/session.service";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-request-session',
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit, AfterViewInit {
  private user!: User | null;
  private coacheeId!: string | undefined;
  private coachId!: string | undefined;
  private requestSessionModal: any;


  requestSessionForm = this.formBuilder.group({
      coacheeId: `${this.coacheeId}`,
      coachId: `${this.coachId}`,
      subject: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required,
      ]),
      time: new FormControl('', [
        Validators.required,
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
    this.initService.initTimePicker();
    this.initService.initDatePicker();
    this.coacheeId = this.user?.id;

    console.log('init coacheeid:' + this.coacheeId);
    this.coachId = this.userService.getSelectedCoachId();
    console.log('init coachid:' + this.coachId);

    if (this.coacheeId === undefined || this.coacheeId === null || this.coachId === undefined || this.coachId === null) {
      alert("coach not selected, visit a coach profile first.");
      this.router.navigate(['users/coaches-overview']);
    }
  }

  ngAfterViewInit(): void {
    this.initService.initSelect();
    this.initService.initDatePicker();
    this.initService.initTimePicker();
    this.initService.initModal();
  }


  modalRequestSession():void {
    this.requestSessionModal = M.Modal.getInstance(document.querySelector('#requestsessionmodal')!);
    console.log('requestsession:'+this.requestSessionModal);
    this.requestSessionModal.open();
  }

  changeTime() {
    this.requestSessionForm.patchValue({
      time: $('.timepicker').val()
    });
  }

  changeDate() {
    this.requestSessionForm.patchValue({
      date: $('.datepicker').val()
    });
  }

  createSession() {

    this.requestSessionForm.patchValue({
      coachId: this.coachId,
      coacheeId: this.coacheeId,
      date: $('.datepicker').val(),
      time: $('.timepicker').val()
    });
    this.sessionService.requestSession(this.requestSessionForm.value).subscribe(()=>{
      M.toast({html:`Session Confirmed with coach:': ${this.coachId}`})//later change this to coach name
      this.router.navigate([`/users/${this.coacheeId}/profile`]);
    });

  }

  get date(): FormControl {
    return this.requestSessionForm.get('date') as FormControl;
  }

  get time(): FormControl {
    return this.requestSessionForm.get('time') as FormControl;
  }

  onSubmit() {
    if (this.requestSessionForm.invalid) {
      console.log("touched");
      this.requestSessionForm.markAllAsTouched();
    } else {
      console.log("untouched");
      this.requestSessionForm.markAsUntouched();
      this.createSession();
    }
  }

  getFormAttribute(formControlName: string): FormControl {
    return this.requestSessionForm.get(`${formControlName}`) as FormControl;
  }


}
