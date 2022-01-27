import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../model/Topic";
import {User} from "../../model/User";

@Component({
  selector: 'app-coaching-topics',
  templateUrl: './coaching-topics.component.html',
  styleUrls: ['./coaching-topics.component.css']
})
export class CoachingTopicsComponent implements OnInit {

  @Input()
  user!: User;

  topics?: Topic[]

  constructor() {
  }

  ngOnInit(): void {
    this.topics = this.user.coachInformation!.topics;
  }

}
