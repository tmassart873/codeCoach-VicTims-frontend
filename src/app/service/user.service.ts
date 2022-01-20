import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../user/model/User";
import {catchError, map, Observable, of, tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.userUrl = `${environment.backEndUrl}/users`;
  }

  getUsers(): Observable<any>{
    return this.http.get<User[]>(this.userUrl);
  }

  getUserByEmail(email: string):Observable<any>{
    console.log(`${this.userUrl}/${email}`);
   // let mail=email.replace('@','');
    // mail=mail.replace('.','');
    return this.http.get<User>(`${this.userUrl}/${encodeURIComponent(email)}`);
  }

  login() {

  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
      tap(_ => this.log(`created new user`)),
      catchError(this.handleError<any>('createUser'))
    )
  }

  getUserId(email:string):Observable<string>{
    let id ='';
   // let mail=email.replace('@','');
    // mail=mail.replace('.','');

    return this.getUserByEmail(email).pipe(map(user => user.id));

  }

  private log(message: string){
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
