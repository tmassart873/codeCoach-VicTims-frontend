import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  _id!: String;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserProfile();
    this.router.navigate([`/users/${this._id}/profile`]);
  }

  getUserProfile() {
    this._id = String(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}
