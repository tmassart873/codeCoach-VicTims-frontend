import {Component, Input, OnInit} from '@angular/core';
import {Topic, User} from "../../model/User";

@Component({
  selector: 'app-my-coaching-topics',
  templateUrl: './my-coaching-topics.component.html',
  styleUrls: ['./my-coaching-topics.component.css']
})
export class MyCoachingTopicsComponent implements OnInit {

  @Input()
  user!: User;

  topics?: Topic[]

  constructor() {
  }

  ngOnInit(): void {
    this.topics = this.user.coachInformation!.topics;
  }

}
