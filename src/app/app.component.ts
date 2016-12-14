import { Component } from '@angular/core';
import { Http } from "@angular/http"
import { AuthService } from "angular-spa"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService) {

  }

  logout() {
    this.auth.logout()
  }
}
