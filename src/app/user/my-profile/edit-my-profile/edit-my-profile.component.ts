import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../../service/user/user.service";

@Component({
  selector: 'app-edit-my-profile',
  templateUrl: './edit-my-profile.component.html',
  styleUrls: ['./edit-my-profile.component.css']
})
export class EditMyProfileComponent implements OnInit {

  user!: User | null;
  id!: string | null;

  @Input()
  color: string = 'waves-effect waves-light btn-large btn-floating yellow darken-2';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

}
