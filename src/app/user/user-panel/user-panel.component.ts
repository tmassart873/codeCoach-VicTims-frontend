import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  _id!: String;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    if (!this.userService.user){
      this.router.navigate(['/']);
    }
    else {
      this.getUserProfile();
      this.router.navigate([`/users/${this._id}/profile`]);
    }
  }

  getUserProfile() {
    this._id = String(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}
