import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "../../app/security/keycloak/keycloak.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private keyCloakService: KeycloakService) { }

  ngOnInit(): void {

  }

  isLoggedIn(){
    return this.keyCloakService.isLoggedIn();
  }

}
