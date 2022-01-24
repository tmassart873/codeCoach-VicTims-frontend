import {AfterViewInit, Component, OnInit} from '@angular/core';
import {KeycloakService} from "../../app/security/keycloak/keycloak.service";
import {InitService} from "../../app/materialize/init.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  constructor(private keyCloakService: KeycloakService, private initService: InitService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit():void{
    this.initService.initSideNav();
    this.initService.initParallax();
  }
  isLoggedIn(){
    return this.keyCloakService.isLoggedIn();
  }

}
