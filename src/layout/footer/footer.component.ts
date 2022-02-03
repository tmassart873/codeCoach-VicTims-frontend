import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "../../app/security/keycloak/keycloak.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  activeRouteIsProfileCoach!: boolean;

  constructor(public keycloakService: KeycloakService) { }

  ngOnInit(): void {
  }

}
