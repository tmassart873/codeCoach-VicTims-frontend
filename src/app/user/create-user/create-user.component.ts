import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  passwordRepeat?: string;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  userForm = this.formBuilder.group({
    id: new FormControl(''),
    firstName: new FormControl('', [
          Validators.required
        ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern("^(?=.*[0-9])(?=.*[A-Z]).{8,255}$"),
    ]),
    email:new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]),
    company:new FormControl(''),
  })

  createUser(){
    this.userService.createUser(this.userForm.value).subscribe();
  }

  onSubmit() {
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
    } else {
      this.createUser();
    }
  }

  changePasswordRepeat(event: any) {
    this.passwordRepeat = event.target.value;
  }

  validatePasswordEqualsPasswordRepeat(): boolean{
    return this.passwordRepeat === this.userForm.get('password')?.value;
  }

  get firstName(): FormControl{
    return this.userForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl{
    return this.userForm.get('lastName') as FormControl;
  }

  get password(): FormControl{
    return this.userForm.get('password') as FormControl;
  }

  get email(): FormControl{
    return this.userForm.get('email') as FormControl;
  }

  get company(): FormControl{
    return this.userForm.get('company') as FormControl;
  }
}
