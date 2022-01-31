import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {KeycloakService} from "../../security/keycloak/keycloak.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  id!: string;
  email!: string;
  message!: string;

  loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required])
    }
  );

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
  }

  onSubmit(loginData: any): void {
    this.email = this.loginForm.get('email')?.value;
    this.keycloakService.logIn(loginData)
      .subscribe({
        next: _ => {
          this.message = 'Success!';
          this.userService.getUserId(this.loginForm.get('email')?.value)
            .subscribe(id => this.router.navigate([`/users/${id}`])
            );
        },
        error: err => {
          this.message = 'Wrong username and/or password!';
          this.loginForm.reset();
          this.router.navigate([`/login`])
        }
      });
  }

  onReset(): void {
    this.loginForm.get('password')?.reset();
  }

  getFormAttribute(formControlName: string): any {
    return this.loginForm.get(`${formControlName}`);
  }
}
