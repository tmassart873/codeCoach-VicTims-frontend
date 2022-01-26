import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Observable} from "rxjs";
import {User} from "../model/User";

@Component({
  selector: 'app-coachee-detail',
  templateUrl: './coachee-detail.component.html',
  styleUrls: ['./coachee-detail.component.css']
})
export class CoacheeDetailComponent implements OnInit{

  user! : User | null;
  email!: string | null;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.user;
  }
}
