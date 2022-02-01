import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../user/model/User";

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit {

  @Input()
  user! : User;

  constructor() { }

  ngOnInit(): void {
  }

}
