import {AfterViewInit, Component, OnInit} from '@angular/core';
import {InitService} from "../../app/materialize/init.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private initService: InitService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initService.initSideNav();
  }
}
