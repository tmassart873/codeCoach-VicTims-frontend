import {AfterViewInit, Component, OnInit} from '@angular/core';
import {User} from "../user/model/User";
import {UserService} from "../service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {InitService} from "../materialize/init.service";

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit, AfterViewInit {
  user!: User | null;
  id!: string | null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private initService: InitService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe((user) => this.user = user);
  }

  ngAfterViewInit(): void {
    this.initService.initModal();
    if(!this.checkIfUserIdIsCoach()){
      this.router.navigate([`users/${this.userService.user?.id}/profile`])
    }
  }

  checkIfUserIdIsCoach() {
    let urlUserId = this.route.snapshot.paramMap.get('id');
    return urlUserId === this.userService.user?.id && this.userService.user?.userRole == 'COACH';
  }


}
