import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Consts } from './../consts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userEmail: String;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userEmail = JSON.parse(localStorage.getItem(Consts.userName)).email;
  }

  onSignOut() {
    this.authService.logout();
  }
}
