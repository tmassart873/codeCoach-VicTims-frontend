import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../user/model/User";
import {catchError, map, Observable, of, Subject, tap} from "rxjs";
import {KeycloakService} from "../security/keycloak/keycloak.service";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userLoggedIn = new Subject<User>();
  private selectedCoachId!:string;

  private readonly userUrl: string;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
    this.userUrl = `${environment.backEndUrl}/users`;
  }

  getUsers(): Observable<any> {
    return this.http.get<User[]>(this.userUrl).pipe(
      tap(_ => UserService.log(`got all users`)),
      catchError(this.handleError<any>('getUsers'))
    );
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${encodeURIComponent(email)}`).pipe(tap(user => {
      const userToLogin: User = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        password: undefined,
        email: user.email,
        company: user.company,
        userRole: undefined
      };
      this.userLoggedIn.next(userToLogin);
    }))
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
      tap(_ => UserService.log(`created new user`)),
      catchError(this.handleError<any>('createUser'))
    )
  }

  getUserId(email: string): Observable<string> {
    return this.getUserByEmail(email).pipe(map(user => user.id));
  }

  get user() : Subject<User> {
    return this.userLoggedIn;
  }

  setSelectedCoachId(id:string){
    this.selectedCoachId= id;
  }
  getSelectedCoachId():string{
    return this.selectedCoachId;
  }

  private static log(message: string) {
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
