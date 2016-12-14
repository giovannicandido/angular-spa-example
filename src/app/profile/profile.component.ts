import { Component, OnInit } from '@angular/core';
import {AuthService} from "angular-spa/auth"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.getLoginAccount()
  }

}
