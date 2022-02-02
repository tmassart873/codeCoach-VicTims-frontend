import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user/user.service";

@Component({
  selector: 'app-my-coach-profile-tab',
  templateUrl: './my-coach-profile-tab.component.html',
  styleUrls: ['./my-coach-profile-tab.component.css']
})
export class MyCoachProfileTabComponent implements OnInit {

  constructor(public userService:UserService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}
