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
    body.set('username', loginData.email);
    body.set('password', loginData.password);
    body.set('client_id', 'codeCoach-victims');
    body.set('client_secret', '4dd1f8b5-0198-41ed-841f-f2b5a9eca83b');
    body.set('grant_type', 'password');
    return this.http.post<KeycloakTokenResponse>(this.url, body.toString(), this.httpOptions);
  }
}
