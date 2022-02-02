import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService} from "../../security/keycloak/keycloak.service";
import {UserService} from "../user/user.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private keycloakService: KeycloakService, private userService: UserService) {


  }

  canActivate(): boolean {
    if (!this.keycloakService.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    if(this.userService.user?.userRole!='COACH'){
      this.router.navigate([`users/${this.userService.user?.id}/profile`]);
      return false;
    }
    return true;
  }
}
