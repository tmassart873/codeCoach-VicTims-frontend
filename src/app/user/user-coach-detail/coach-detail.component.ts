import {Component, OnInit} from '@angular/core';
import {User} from "../model/User";
import {UserService} from "../../service/user.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {

  user!: User | null;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.user!;
  }

}
