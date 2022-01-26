import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../model/User";
import {Observable} from "rxjs";
import {InitService} from "../../materialize/init.service";

@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.css']
})
export class CoachOverviewComponent implements OnInit {

  coaches$!: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getCoaches();
  }

  getCoaches(): void {
    this.coaches$ = this.userService.getCoaches();
  }

}
