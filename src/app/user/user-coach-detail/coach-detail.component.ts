import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {

  user!: User | null;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.user!;
  }

}
