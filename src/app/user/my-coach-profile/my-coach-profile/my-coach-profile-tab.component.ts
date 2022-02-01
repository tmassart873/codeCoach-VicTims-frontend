import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user/user.service";

@Component({
  selector: 'app-my-coach-profile-tab',
  templateUrl: './my-coach-profile-tab.component.html',
  styleUrls: ['./my-coach-profile-tab.component.css']
})
export class MyCoachProfileTabComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private router:Router,
              private userService: UserService) { }

  ngOnInit(): void {
  }
  requestSession() {
    let id = '';
    this.route.params.subscribe(params => id = params['id']);
    this.userService.setSelectedCoachId(id);
    console.log(id);
    console.log(this.userService.user?.id);
    this.router.navigate(['/sessions/request-session']);
  }

  checkIfThisIsMyCoachProfile() : boolean{
    let id = '';
    this.route.params.subscribe(params => id = params['id']);
    return this.userService.user?.id === id;
  }
}
