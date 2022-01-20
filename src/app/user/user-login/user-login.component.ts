import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router, Route, ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {KeycloakService} from "../../security/keycloak/keycloak.service";

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
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        //Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    }

  );
  message!: string;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private keycloakService: KeycloakService) { }

  ngOnInit(): void {

  }

  onSubmit(loginData: any): void{
          this.loginForm.reset();
          this.router.navigate([`/users/${this.id}/profile`]);
    this.keycloakService.logIn(loginData)
      .subscribe(_ => this.message = 'Success!', err => this.message = 'Wrong username and/or password!')
    }
  onReset(): void{
    this.loginForm.get('password')?.reset();
  }

  getFormAttribute(formControlName: string): any {
    return this.loginForm.get(`${formControlName}`);
  }
}
