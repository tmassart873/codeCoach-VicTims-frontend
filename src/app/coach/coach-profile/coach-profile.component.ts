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
  role!: string | undefined
  id!: string

  @Input()
  user!: User;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.checkIfUserIsCoach();
  }

  private checkIfUserIsCoach() {
    let userById = this.userService.getUserById((this.route.snapshot.paramMap.get('id')));



    userById.subscribe((user) => {
      this.role = user.userRole;
        console.log(this.role);
      this.id = user.id;
      console.log(this.id);
      if (this.role != 'COACH') {
        this.router.navigate([`users/${this.id}/coachee-profile`]);
      }
    });


  }
}
