import {Component, OnInit} from '@angular/core';
import {User} from "../user/model/User";
import {UserService} from "../service/user/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  user!: User | null;
  id!: string;

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => this.id = param['id']
    )
    this.userService.getUserById(this.id).subscribe(
      {
        next: user => this.user = user
      }
    );
  }

}
