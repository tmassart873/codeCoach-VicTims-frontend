import {Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Observable} from "rxjs";
import {KeycloakService} from "../../security/keycloak/keycloak.service";
import {User} from "../model/User";

@Component({
  selector: 'app-coachee-detail',
  templateUrl: './coachee-detail.component.html',
  styleUrls: ['./coachee-detail.component.css']
})
export class CoacheeDetailComponent implements OnInit {

  user$!: Observable<User>;
  email!: string | null;

  constructor(private keycloakService: KeycloakService, private userService: UserService) { }

  ngOnInit(): void {
    this.email = this.keycloakService.getEmailAddress();
    if(this.email !== null){
      this.user$ =this.userService.getUserByEmail(this.email);
      console.log(this.user$)
    }
  }
}
