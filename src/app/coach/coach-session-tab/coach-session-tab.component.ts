import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "../../security/keycloak/keycloak.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-coach-session-tab',
  templateUrl: './coach-session-tab.component.html',
  styleUrls: ['./coach-session-tab.component.css']
})
export class CoachSessionTabComponent implements OnInit {

  constructor(private keycloakService : KeycloakService,
              private route:ActivatedRoute,
              private router:Router,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  userIsLoggedIn() {
    return this.keycloakService.isLoggedIn();
  }

  requestSession() {
    let id = '';
    this.route.params.subscribe(params => id = params['id']);
    this.userService.setSelectedCoachId(id);
    console.log(id);
    console.log(this.userService.user?.id);
    this.router.navigate(['/sessions/request-session']);
  }
}
