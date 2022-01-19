import { Component, OnInit, AfterViewInit } from '@angular/core';
import {InitService} from "../materialize/init.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  constructor(private initService: InitService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.initService.initParallax();
  }

}
