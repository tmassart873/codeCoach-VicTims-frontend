import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Topic, User} from "../../user/model/User";
import {catchError, map, Observable, of, tap, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
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
    let param = new HttpParams().set('email', email);
    return this.http.get<User>(`${this.userUrl}`, {params : param})
      .pipe(tap(user => {
      const userToLogin: User = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        password: undefined,
        email: user.email,
        company: user.company,
        userRole: user.userRole,
        coachInformation: {
          id: user.coachInformation?.id,
          coachXp: user.coachInformation?.coachXp,
          introduction: user.coachInformation?.introduction,
          availability: user.coachInformation?.availability,
          topics: user.coachInformation?.topics
        }
      };
      localStorage.setItem('userToLogin', JSON.stringify(userToLogin));
    }))
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
      tap(_ => UserService.log(`created new user`)),
      catchError((error) => throwError(error))
    )
  }

  getUserId(email: string): Observable<string> {
    return this.getUserByEmail(email).pipe(map(user => user.id));
  }

  getUserById(id : string | null): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  get user(): User | null {
    const userToLogin = localStorage.getItem('userToLogin');
    if (userToLogin) {
      return JSON.parse(userToLogin);
    }
    return null;
  }

  setSelectedCoachId(id:string){
    this.selectedCoachId= id;
  }
  getSelectedCoachId():string{
    return this.selectedCoachId;
  }

  getCoaches(): Observable<User[]> {
    let param = new HttpParams().set('is-coach', true);
    return this.http.get<User[]>(`${this.userUrl}`, {params : param});
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
      console.error(error);
      UserService.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  becomeCoach(user:User): Observable<User> {
      const id: String = user.id;
      user.userRole = 'COACH';
      return this.http.put<User>(`${this.userUrl}/${id}`, null)
        .pipe(
          tap(user => localStorage.setItem('userToLogin', JSON.stringify(user)))
        );
  }

  emptyUser() {
    localStorage.setItem('userToLogin', JSON.stringify(null));
  }

}
