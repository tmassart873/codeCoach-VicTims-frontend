import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/User";

@Component({
  selector: 'app-my-coach-information',
  templateUrl: './my-coach-information.component.html',
  styleUrls: ['./my-coach-information.component.css']
})
export class MyCoachInformationComponent implements OnInit {

  @Input()
  user! : User ;

  constructor() { }

  ngOnInit(): void {
  }

}
