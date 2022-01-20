import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {FormBuilder} from "@angular/forms";

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
    id: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    company: '',
  })

  createUser(){
    this.userService.createUser(this.userForm.value);
  }

  onSubmit() {
    console.log(this.passwordRepeat);
    this.createUser();
  }

  logIt() {
    console.log(this.passwordRepeat);
  }
}
