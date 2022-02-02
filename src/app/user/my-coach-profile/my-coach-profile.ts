import {AfterViewInit, Component, OnInit} from '@angular/core';
import {User} from "../model/User";
import {UserService} from "../../service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class MyCoachProfileComponent implements OnInit, AfterViewInit {

  loggedInUser!: User | null;
  color?: string;
  id!: string | null;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loggedInUser = this.userService.user;
    this.color = 'waves-effect waves-light btn-large btn-floating teal lighten-3';
  }

  ngAfterViewInit() {
    if (!this.checkIfUserIsAuthorized()) {
          this.router.navigate([`users/${this.route.snapshot.paramMap.get('id')}/coach-profile`]);
    }
  }

  goToProfileNotLoggedIn()
    :
    void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id: " + this.id)
    this.router.navigate(['users/' + this.id + '/coach-profile']);
  }

  checkIfUserIsAuthorized() {
    let urlUserId = this.route.snapshot.paramMap.get('id');

    if (urlUserId !== this.userService.user?.id) {
      return false;
    }
    if (urlUserId === this.userService.user?.id) {
      return this.userService.user.userRole === 'COACH';
    }
    return false;
  }
}
