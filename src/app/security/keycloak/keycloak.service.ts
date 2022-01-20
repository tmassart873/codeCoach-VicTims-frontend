import { Injectable } from '@angular/core';
import {Observable, Subject, tap} from "rxjs";
import {HttpKeycloakService} from "./http-keycloak.service";
import {KeycloakTokenResponse} from "./keycloak-token-response";
import {KeycloakToken} from "./keycloak-token";
import * as JWT from "jwt-decode";
import {HttpClient} from "@angular/common/http";
import {User} from "../../user/model/User";
import {UserService} from "../../service/user.service";

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private readonly token_key_name = 'access_token';
  private _loggedInUser$: Subject<string | null> = new Subject();

  constructor(private httpKeycloakService: HttpKeycloakService, private userService: UserService) {

  }

  get loggedInUser$(): Observable<string | null> {
    return this._loggedInUser$;
  }

  getToken(): string | null {
    return localStorage.getItem(this.token_key_name);
  }

  isLoggedIn() : boolean {
    return this.getToken() !== null;
  }

  logIn(loginData: any): Observable<KeycloakTokenResponse> {
    return this.httpKeycloakService.logIn(loginData)
      .pipe(tap(response => this.setToken(response.access_token)));
  }

  logout() : void {
    localStorage.removeItem(this.token_key_name);
    this.sendSignal();
  }

  private setToken(accessToken: string) {
    localStorage.setItem(this.token_key_name, accessToken);
    this.sendSignal();
  }

  sendSignal() : void {
    this._loggedInUser$.next(this.getUsername());
  }

  private getUsername(): string | null {
    let token = this.getToken();
    if (token) {
      return (JWT.default(token) as KeycloakToken).preferred_username
    }
    return null;
  }

}
