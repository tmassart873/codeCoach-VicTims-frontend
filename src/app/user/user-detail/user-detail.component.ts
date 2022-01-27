import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../model/User";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  coaches = Subscription;
  user! : User | null;
  email!: string | null;
  isCoach!: boolean;

  @Input()
  color : string = 'waves-effect waves-light btn-large btn-floating yellow darken-2';

  constructor(private userService: UserService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

}
