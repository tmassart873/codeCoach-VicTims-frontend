import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/User";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {

  user$!: Observable<User>;
  user! : User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.user;
  }


}
