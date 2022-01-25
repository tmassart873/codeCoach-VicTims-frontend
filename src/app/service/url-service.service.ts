import {Injectable} from '@angular/core';
import {filter, pairwise, Subscription} from "rxjs";
import {Router, RoutesRecognized} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {
  private previousUrl!: Subscription;


  constructor(private router: Router) {

  }

  setPreviousUrl(previousUrl: string) {
    this.previousUrl = this.router.events
      .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {
        console.log('previous', events[0].urlAfterRedirects);//previous url
        console.log('current url', events[1].urlAfterRedirects);//current url
      });
  }
}
