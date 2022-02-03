import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../service/user/user.service";
import {User} from "../../model/User";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user?: User | null;
  id!: string | null;

  @Input()
  color: string = 'waves-effect waves-light btn-large btn-floating yellow darken-2';
  editedAble: boolean = false;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user = this.userService.user;
    if(this.activatedRoute.parent!==null) {
      let id = this.activatedRoute.parent!.snapshot.paramMap.get('id');
      if(this.user?.id === id || this.user?.userRole == 'ADMIN'){
        this.editedAble = true;
      }
    }
  }

}
