import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators,} from "@angular/forms";
import {Router} from "@angular/router";
import {InitService} from "../../materialize/init.service";
import {Topic, User} from "../../user/model/User";
import {SessionService} from "../../service/session/session.service";
import {UserService} from "../../service/user/user.service";
import {global} from "@angular/compiler/src/util";

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
  private coach!: User | null;
  public topics!: Topic[] | undefined;

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
        this.forbiddenNameValidator()
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

    this.userService.getUserById(this.coachId).subscribe(
      user => {
        this.coach = user;
        this.topics = user.coachInformation?.topics;
        console.log('get current coach name: ' + this.coach?.firstName);

        if (this.topics?.length === 0) {
          this.topics.push(new class implements Topic {
            id = '0202d2af-5f2f-43c1-860d-66bdfbd206d1';
            name = 'no topic';
          })
        }
        this.topics?.forEach(topic => console.log('get current topic names: ' + topic.name));
        this.initService.initSelect();
      });
  }

  ngAfterViewInit(): void {
    this.initService.initSelect();
    this.initService.initDatePicker();
    this.initService.initTimePicker();
    this.initService.initModal();
  }


  modalRequestSession(): void {
    this.requestSessionModal = M.Modal.getInstance(document.querySelector('#requestsessionmodal')!);
    console.log('requestsession:' + this.requestSessionModal);
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
    // this.requestSessionForm.get('time')?.markAsUntouched();
    this.requestSessionForm.get('time')?.updateValueAndValidity();
  }

  createSession() {
    this.requestSessionForm.patchValue({
      coachId: this.coachId,
      coacheeId: this.coacheeId,
      date: $('.datepicker').val(),
      time: $('.timepicker').val()
    });
    this.sessionService.requestSession(this.requestSessionForm.value).subscribe(() => {
      M.toast({html: `Session Confirmed with coach:': ${this.coachId}`})//later change this to coach name
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

  private checkIfHourIsAlreadyHappened(): boolean {
    if (!this.requestSessionForm) {
      return false;
    }
    if(!this.requestSessionForm.get('time')?.value) {
      return false;
    }

    if(this.isTheSameDate()) {
      console.log('time: ' + this.requestSessionForm.get('time')?.value)
      let now = new Date(Date.now());
      let sumMinutes = now.getMinutes()+now.getHours()*60;
      let arrayHoursMin = this.requestSessionForm.get('time')?.value.split(":");
      let sumArrayHoursMin =  parseInt(arrayHoursMin[0])*60 + parseInt(arrayHoursMin[1]);
      console.log(sumArrayHoursMin)
      console.log("nowFunction: " + sumMinutes)
      return sumArrayHoursMin < sumMinutes;
    }
    return false;
  }

  private isTheSameDate(): boolean {
    if (!this.requestSessionForm) {
      return false;
    }
    if(!this.requestSessionForm.get('date')?.value) {
      return false;
    }

    let now = new Date(Date.now());
    now.setDate(now.getDate())

    let nowString = now.toLocaleDateString('en-GB');
    if (this.requestSessionForm.get('date')?.value === nowString) {
      return true;
    }
    return false;
  }

  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.checkIfHourIsAlreadyHappened()) {
        return {forbiddenTime: {value: control.value}};
      } else {
        return null;
      }
    }
  }
}
