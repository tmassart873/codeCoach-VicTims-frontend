import { Injectable } from '@angular/core';
import {User} from "../user/model/User";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  coachId!:string;
  coach!: Observable<any>;
  constructor(private http:HttpClient, private userService:UserService) { }



}


