import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {KeycloakService} from "./keycloak.service";
import {catchError, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
@Injectable()
export class AuthenticationInterceptor {
  constructor(private keycloakService: KeycloakService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.keycloakService.isLoggedIn()) {
      this.router.navigateByUrl("/login");
      return next.handle(req);
    }


    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.keycloakService.getToken()}`
      }
    })
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 403 || err.status === 401) {
          this.router.navigateByUrl("/error");
        } else if(err.status === 0) {
          this.router.navigateByUrl("/backend-unavailable")
        }
        return throwError(err);
      }));
  }
}
