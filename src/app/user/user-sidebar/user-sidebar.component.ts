import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  _id!: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this._id = String(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  checkIfLoggedIn() {
    return this.userService.user;
  }
}
