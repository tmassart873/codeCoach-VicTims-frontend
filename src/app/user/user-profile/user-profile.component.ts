import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/User";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user$!: Observable<User>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

}
