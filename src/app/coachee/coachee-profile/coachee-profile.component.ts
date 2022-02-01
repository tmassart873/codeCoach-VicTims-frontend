import { Component, OnInit } from '@angular/core';
import {User} from "../../user/model/User";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-coachee-profile',
  templateUrl: './coachee-profile.component.html',
  styleUrls: ['./coachee-profile.component.css']
})

export class CoacheeProfileComponent implements OnInit {
  user!: User | null;
  id!: string | null;

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe((user) => this.user = user);
  }
}
