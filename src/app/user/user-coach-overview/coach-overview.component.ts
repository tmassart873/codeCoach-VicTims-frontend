import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../model/User";
import {Observable} from "rxjs";

@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.css']
})
export class CoachOverviewComponent implements OnInit {

  coaches$!: Observable<User[]>;
  searchTopic!: string;
  searchName!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getCoaches();
  }

  getCoaches(): void {
    this.coaches$ = this.userService.getCoaches();
  }

}
