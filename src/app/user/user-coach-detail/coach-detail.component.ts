import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {


  constructor(private route:ActivatedRoute, private router: Router, private http:HttpClient,private userService:UserService) { }

  ngOnInit(): void {
  }

  requestSession() {
    let id ='';
    this.route.params.subscribe(params=> id = params['id']);
    this.userService.setSelectedCoachId(id);
    console.log(id);
    console.log(this.userService.getSelectedCoachId());
    this.router.navigate(['/sessions/request-session']);
  }
}
