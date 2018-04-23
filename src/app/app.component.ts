import { Component } from '@angular/core'
import { Http } from '@angular/http'
import { AuthService, AppSecurityListener } from 'angular-spa'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, private ajax: AppSecurityListener) {

  }

  logout() {
    this.auth.logout()
  }
}
