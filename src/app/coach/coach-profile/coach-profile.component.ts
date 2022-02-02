import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../user/model/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit {

  @Input()
  user!: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.checkIfUserIsAuthorized()) {
      this.router.navigate([`users/${this.userService.user?.id}/profile`])
    }
  }

  checkIfUserIsAuthorized() {
    let urlUserId = this.route.snapshot.paramMap.get('id');

    if(urlUserId!== this.userService.user?.id){
      return true;
    }
    if(urlUserId === this.userService.user?.id){
      return this.userService.user.userRole === 'COACH';
    }

    return false;

  }

}
