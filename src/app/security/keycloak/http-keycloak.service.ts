import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {KeycloakTokenResponse} from "./keycloak-token-response";

@Injectable({
  providedIn: 'root'
})
export class HttpKeycloakService {

  private url = `https://keycloak.switchfully.com/auth/realms/java-oct-2021/protocol/openid-connect/token`
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  };

  constructor(private http: HttpClient) {
  }

  logIn(loginData: any): Observable<KeycloakTokenResponse> {

    const body = new URLSearchParams();
    body.set('username', loginData.username);
    body.set('password', loginData.password);
    body.set('client_id', 'order');
    body.set('client_secret', 'afc74d17-d5e9-49bf-8f59-ac22538505b6');
    body.set('grant_type', 'password');
    return this.http.post<KeycloakTokenResponse>(this.url, body.toString(), this.httpOptions);
  }
}
