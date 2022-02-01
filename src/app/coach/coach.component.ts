import { Component, OnInit } from '@angular/core';
import {User} from "../user/model/User";

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  user! : User;

  constructor() { }

  ngOnInit(): void {
  }

}
