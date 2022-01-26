import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KeycloakService} from "../../app/security/keycloak/keycloak.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../app/service/user.service";
import {User} from "../../app/user/model/User";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header-loggedin',
  templateUrl: './header-loggedin.component.html',
  styleUrls: ['./header-loggedin.component.css']
})
export class HeaderLoggedinComponent implements OnInit {

  COACH: string = 'COACH';

  @Output()
  eventActiveRouter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private keycloakService: KeycloakService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
  }

  logOut() {
    this.keycloakService.logout();
    this.router.navigate(['']);
  }

  onRouterLinkActive(event: boolean) {
    this.eventActiveRouter.emit(event);
  }

  isACoach() {
    if (this.userService.user){
      return this.userService.user.userRole === this.COACH;
    }
    return false;
  }

}
