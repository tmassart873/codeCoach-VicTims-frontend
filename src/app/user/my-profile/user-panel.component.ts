import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {KeycloakService} from "../../security/keycloak/keycloak.service";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  _id!: String;
  id!: string | null;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private keycloackService: KeycloakService) {
  }

  ngOnInit(): void {
    if (!this.userService.user){
      this.router.navigate(['/']);
    }
    else {
      this.getUserProfile();
      this.router.navigate([`/users/${this._id}/profile`]);
    }
  }

  getUserProfile() {
    this._id = String(this.activatedRoute.snapshot.paramMap.get('id'));
  }


  goToProfileNotLoggedIn(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id: " + this.id)
    this.router.navigate(['users/' + this.id + '/coachee-profile']);
  }

  isUserLoggedIn() : boolean {
    if (this.keycloackService.isLoggedIn()) {
      return true
    }
    this.goToProfileNotLoggedIn()
    return false;
  }

}
