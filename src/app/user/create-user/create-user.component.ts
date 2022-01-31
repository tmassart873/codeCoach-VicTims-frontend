import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {FormBuilder, FormControl, ValidationErrors, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {InitService} from "../../materialize/init.service";



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, AfterViewInit {

  passwordRepeat?: string;
  private duplicateUserName!: string;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private initService: InitService
  ) {
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.initService.initModal();
  }

  userForm = this.formBuilder.group({
    id: new FormControl(''),
    firstName: new FormControl('',
      [Validators.required]),
    lastName: new FormControl('',
      [Validators.required]),
    password: new FormControl('',
      [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[A-Z]).{8,255}$"),]),
    email: new FormControl('',
      [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        () => this.validateUniqueEmail()]),
    company: new FormControl(''),
  })

  private validateUniqueEmail(): ValidationErrors | null {
    if(this.userForm && this.email.value === this.duplicateUserName) {
      return {duplicateUserError:true};
    }
    return null;
  }

  creatuserModal(){
    let modal = M.Modal.getInstance(document.querySelector('#registerusermodal')!);
    modal.open();
  }

  createUser() {
    this.userService.createUser(this.userForm.value)
      .subscribe({
        next: user => {
          M.toast({html: `Account for: ${user.email} has been successfully created`});
          this.router.navigate([`/login`]);
        },
        error: err => {
          M.toast({html: `A user with that email already exists`});
          this.duplicateUserName = this.email.value;
          this.email.updateValueAndValidity();
        }
      });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.createUser();
    }
  }

  changePasswordRepeat(event: any) {
    this.passwordRepeat = event.target.value;
  }

  validatePasswordEqualsPasswordRepeat(): boolean {
    return this.passwordRepeat === this.userForm.get('password')?.value;
  }

  get firstName(): FormControl {
    return this.userForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.userForm.get('lastName') as FormControl;
  }

  get password(): FormControl {
    return this.userForm.get('password') as FormControl;
  }

  get email(): FormControl {
    return this.userForm.get('email') as FormControl;
  }

  get company(): FormControl {
    return this.userForm.get('company') as FormControl;
  }
}
