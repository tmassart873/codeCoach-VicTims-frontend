import {Component, OnInit} from '@angular/core';
import {User} from "../user/model/User";
import {UserService} from "../service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  user!: User | null;
  id!: string | null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe((user) => this.user = user);
  }


}
