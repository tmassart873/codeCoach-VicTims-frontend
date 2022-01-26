import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../model/User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-apply-for-coach',
  templateUrl: './apply-for-coach.component.html',
  styleUrls: ['./apply-for-coach.component.css']
})
export class ApplyForCoachComponent implements OnInit {

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }


  becomeCoach() {
    const user = this.userService.user;
    if (user) {
      this.userService.becomeCoach();
      this.router.navigate([`users/${user.id}/coach-profile`]);
    }
  }
}
