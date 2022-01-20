import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router, Route, ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  id!: string;
  loginForm = this.formBuilder.group({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    }

  );

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit(): void{
          this.loginForm.reset();
          this.router.navigate([`/users/${this.id}/profile`]);
    }
  onReset(): void{
    this.loginForm.get('password')?.reset();
  }

  getFormAttribute(formControlName: string): any {
    return this.loginForm.get(`${formControlName}`);
  }
}
