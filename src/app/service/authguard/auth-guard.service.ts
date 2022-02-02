import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService} from "../../security/keycloak/keycloak.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private keycloakService: KeycloakService) {


  }

  canActivate(): boolean {
    if (!this.keycloakService.isLoggedIn()) {
      console.log('Unauthorized');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
