import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user/user.service";

@Component({
  selector: 'app-apply-for-coach',
  templateUrl: './apply-for-coach.component.html',
  styleUrls: ['./apply-for-coach.component.css']
})
export class ApplyForCoachComponent implements OnInit {


  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }


  becomeCoach() {
    const user = this.userService.user;
    if (user) {
      this.userService.becomeCoach(user).subscribe(
        user => {
          M.toast({html: `Changed the role of ${user.email} to Coach`});
          this.router.navigate([`users/${user.id}/coach-profile`]);
        });
    }
  }
}
