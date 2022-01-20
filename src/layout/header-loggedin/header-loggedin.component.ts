import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "../../app/security/keycloak/keycloak.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-loggedin',
  templateUrl: './header-loggedin.component.html',
  styleUrls: ['./header-loggedin.component.css']
})
export class HeaderLoggedinComponent implements OnInit {

  constructor(private keycloakService: KeycloakService, private router:Router) { }

  ngOnInit(): void {
  }


  logOut(){
    this.keycloakService.logout();
    this.router.navigate(['']);
  }
}
