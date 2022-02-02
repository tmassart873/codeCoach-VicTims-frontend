import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user/user.service";

@Component({
  selector: 'app-my-coach-profile-tab',
  templateUrl: './my-coach-profile-tab.component.html',
  styleUrls: ['./my-coach-profile-tab.component.css']
})
export class MyCoachProfileTabComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

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
