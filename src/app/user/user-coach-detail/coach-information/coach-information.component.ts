import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../../service/user.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-coach-information',
  templateUrl: './coach-information.component.html',
  styleUrls: ['./coach-information.component.css']
})
export class CoachInformationComponent implements OnInit {

  @Input()
  user! : User ;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user.coachInformation?.coachXp);
  }

}
