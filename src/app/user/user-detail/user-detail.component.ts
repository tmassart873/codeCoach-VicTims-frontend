import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../model/User";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  user! : User | null;
  email!: string | null;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.user;
  }
}
