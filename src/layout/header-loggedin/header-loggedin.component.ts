import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "../../app/security/keycloak/keycloak.service";
import {Router} from "@angular/router";
import {UserService} from "../../app/service/user.service";
import {User} from "../../app/user/model/User";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header-loggedin',
  templateUrl: './header-loggedin.component.html',
  styleUrls: ['./header-loggedin.component.css']
})
export class HeaderLoggedinComponent implements OnInit {

  private email!: string | null;
  user$!: Observable<User>;

  constructor(private keycloakService: KeycloakService, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.email = this.keycloakService.getEmailAddress();
    if(this.email !== null){
      this.user$ =this.userService.getUserByEmail(this.email);
    }
  }


  logOut() {
    this.keycloakService.logout();
    this.router.navigate(['']);
  }
}
