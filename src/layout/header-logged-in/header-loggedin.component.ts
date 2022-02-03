import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KeycloakService} from "../../app/security/keycloak/keycloak.service";
import {Router} from "@angular/router";
import {UserService} from "../../app/service/user/user.service";
import {User} from "../../app/user/model/User";
import {InitService} from "../../app/materialize/init.service";

@Component({
  selector: 'app-header-loggedin',
  templateUrl: './header-loggedin.component.html',
  styleUrls: ['./header-loggedin.component.css']
})
export class HeaderLoggedinComponent implements OnInit, AfterViewInit {

  COACH: string = 'COACH';

  @Output()
  isCoachProfileActive: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private keycloakService: KeycloakService,
              private router: Router,
              private userService: UserService,
              private initService: InitService) {
  }

  ngOnInit(): void {
  }

  logOut() {
    this.keycloakService.logout();
    this.userService.emptyUser();
    M.toast({html: `Successfully logged out`});
    this.router.navigate(['']);
  }

  onRouterLinkActive(event: boolean) {
    this.isCoachProfileActive.emit(event);
    console.log(event);
  }

  isACoach() {
    if (this.userService.user){
      return this.userService.user.userRole === this.COACH;
    }
    return false;
  }

  get user(): User | null {
    return this.userService.user;
  }

  ngAfterViewInit() {
    this.initService.initSideNav();
  }
}
