import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../user/model/User";
import {catchError, map, Observable, of, tap} from "rxjs";
import {KeycloakService} from "../security/keycloak/keycloak.service";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly userUrl: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private keycloakService: KeycloakService) {
    this.userUrl = `${environment.backEndUrl}/users`;
  }

  getUsers(): Observable<any>{
    return this.http.get<User[]>(this.userUrl).pipe(
      tap(_ => UserService.log(`got all users`)),
      catchError(this.handleError<any>('getUsers'))
    );
  }
  getUser() {
    let userName = this.keycloakService.getEmailAddress();

    if (userName) {
      let id: string | null;
      this.getUserId(userName).pipe(tap(userid => id = userid));
      let token = this.keycloakService.getToken();

      if (token) {
        let header = new HttpHeaders().set(
          "Authorization",
          token);
        return this.http.get<User>(`${this.userUrl}/${userName}`, {headers: header});
      }
    }
    let userProfile: User = {company: "", id: "", password: "", userRole: "", firstName: "", lastName: "", email: ""};
    return of(userProfile);
  }

  getUserByEmail(email: string):Observable<any>{
      return this.http.get<User>(`${this.userUrl}/${encodeURIComponent(email)}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
      tap(_ => UserService.log(`created new user`)),
      catchError(this.handleError<any>('createUser'))
    )
  }

  getUserId(email:string):Observable<string>{
    return this.getUserByEmail(email).pipe(map(user => user.id));
  }

  private static log(message: string){
    console.log(`UserService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      UserService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
