import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {KeycloakService} from "../../app/security/keycloak/keycloak.service";
import {InitService} from "../../app/materialize/init.service";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  @ViewChild('footerComponent', {static : true})
  private footer : FooterComponent = new FooterComponent();

  constructor(private keyCloakService: KeycloakService,
              private initService: InitService) { }

  ngOnInit(): void {
    this.initService.initSideNav();
  }

  ngAfterViewInit(): void {
    this.initService.initParallax();
  }

  isLoggedIn() {
    return this.keyCloakService.isLoggedIn();
  }

  adjustFooterStyle($event: boolean) {
    this.footer.activeRouteIsProfileCoach = $event;
  }
}
