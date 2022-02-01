import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-left-tab',
  templateUrl: './left-tab.component.html',
  styleUrls: ['./left-tab.component.css']
})
export class LeftTabComponent implements OnInit {

  _id!: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this._id = String(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
