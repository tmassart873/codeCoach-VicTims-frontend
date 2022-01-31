import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/User";

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
  }
}
