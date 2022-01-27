import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {

  user!: User | null;
  color? : string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.user!;
    this.color = 'waves-effect waves-light btn-large btn-floating teal lighten-3';
  }

}
