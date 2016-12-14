import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http"

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }
  simulateAjax() {
    this.http.get("assets/data/simulate-response.txt").subscribe()
  }
  simulateError() {
    this.http.get("notfound").subscribe()
  }
}
