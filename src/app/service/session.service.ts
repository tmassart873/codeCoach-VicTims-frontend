import {Injectable} from '@angular/core';
import {User} from "../user/model/User";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  coachId!: string;
  coach!: Observable<any>;

  constructor(private userService: UserService, private router:Router) {
  }




}


