import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {catchError} from "rxjs";
import {Router, RouterLink} from "@angular/router";
import {error} from "jquery";
import {HttpErrorResponse} from "@angular/common/http";
import {resolve} from "@angular/compiler-cli";


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  passwordRepeat?: string;
  private isDuplicateOfExistingUser = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private routerLink: Router
  ) {
  }

  ngOnInit(): void {
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
      [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),]),
    company: new FormControl(''),
  })

  createUser() {
    this.userService.createUser(this.userForm.value).subscribe({
      next() {
        return true;
      },
      error(msg: HttpErrorResponse) {
        console.log('Error message test' + msg);
        resolve("");
      }
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      console.log('value:' + this.createUser())
      return this.createUser();
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
