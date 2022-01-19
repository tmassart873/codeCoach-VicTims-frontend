import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserModule} from "../user/user.module";
import {User} from "../user/model/User";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = `${environment.backEndUrl}/users`;
  }

  getUsers(): Observable<any>{
    return this.http.get<User[]>(this.userUrl);
  }


  login() {

  }
}
