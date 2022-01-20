import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {KeycloakService} from "./security/keycloak/keycloak.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codeCoach-VicTims-frontend';
  loggedInUser$!: Observable<String | null>;

  constructor(private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.keycloakService.loggedInUser$;
    //Ugly but I couldn't think of a better way
    setTimeout(() => this.keycloakService.sendSignal(), 1);
  }

  logout() {
    this.keycloakService.logout();
    console.log('logged out');
  }
}
