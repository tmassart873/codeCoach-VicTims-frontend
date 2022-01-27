import {Component, Input, OnInit} from '@angular/core';
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

  @Input()
  color : string = 'waves-effect waves-light btn-large btn-floating yellow darken-2';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.user;
  }
}
