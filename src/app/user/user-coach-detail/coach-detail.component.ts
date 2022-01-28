import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {

  user$!: Observable<User> | null;
  testUser! : User | null;
  color? : string;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.user$ =  this.userService.getUserById(id!);
    console.log(this.user$.subscribe(user => this.testUser = user));
    this.color = 'waves-effect waves-light btn-large btn-floating teal lighten-3';
  }

}
