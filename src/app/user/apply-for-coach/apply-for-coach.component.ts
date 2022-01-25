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

  user!: User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }


  becomeCoach() {
    this.user = this.userService.user;
    this.user.userRole = 'Coach';
    // const userId = String(this.activatedRoute.snapshot.paramMap.get('id'))!;
    const userId = this.user.id;
    console.log(userId);
    this.userService.becomeCoach(userId,this.user).subscribe();
    this.router.navigate([`users/${userId}/coach-profile`]);
  }
}
