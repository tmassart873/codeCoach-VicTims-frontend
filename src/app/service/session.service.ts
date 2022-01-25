import {Injectable} from '@angular/core';
import {User} from "../user/model/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {UserService} from "./user.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Session} from "../session/model/Session";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  coachId!: string;
  coach!: Observable<any>;

  private readonly sessionUrl: string;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private userService: UserService, private http: HttpClient) {
    this.sessionUrl = `${environment.backEndUrl}/sessions`;
  }

  requestSession(session: Session): Observable<Session> {
    return this.http.post<Session>(this.sessionUrl, this.httpOptions).pipe(
      tap(_ => SessionService.log(`created new session`)),
      catchError(this.handleError<any>('created new session'))
    );
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
      SessionService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }
}


