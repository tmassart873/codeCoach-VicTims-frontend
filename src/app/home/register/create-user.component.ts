import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {FormBuilder, FormControl, ValidationErrors, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  passwordRepeat?: string;
  private duplicateUserName!: string;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  userForm = this.formBuilder.group({
    id: new FormControl(''),
    firstName: new FormControl('',
      [Validators.required,
        Validators.pattern("^[?A-z?Ä-ü?À-ù?Á-ú]*?[-\\s]?[?A-z?Ä-ü?À-ù?Á-ú]+$")] ),
    lastName: new FormControl('',
      [Validators.required,
      Validators.pattern("^[?A-z?Ä-ü?À-ù?Á-ú]*?[-\\s]?[?A-z?Ä-ü?À-ù?Á-ú]+$")]),
    password: new FormControl('',
      [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[A-Z]).{8,255}$"),] ),
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

  createUser() {
    this.userService.createUser(this.userForm.value)
      .subscribe({
        next: _ => {
          console.log('success register')
          this.router.navigate([`/login`]);
        },
        error: err => {
          console.log('failed to register')
          this.duplicateUserName = this.email.value
          this.email.updateValueAndValidity()
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