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

  user!: User | null;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }


  becomeCoach() {
    this.user = this.userService.user;
    if(this.user) {
      this.user.userRole = 'COACH';
      const userId = this.user.id;
      this.userService.becomeCoach(userId, this.user).subscribe();
      this.router.navigate([`users/${userId}/coach-profile`]);
    }
  }
}
