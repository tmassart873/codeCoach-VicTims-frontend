import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {

  user!: User | null;
  color? : string;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
  }


  ngOnInit(): void {
    this.user = this.userService.user!;
    this.color = 'waves-effect waves-light btn-large btn-floating teal lighten-3';
  }

  requestSession() {
    let id = '';
    this.route.params.subscribe(params => id = params['id']);
    this.userService.setSelectedCoachId(id);
    console.log(id);
    console.log(this.userService.user?.id);
    this.router.navigate(['/sessions/request-session']);
  }
}
