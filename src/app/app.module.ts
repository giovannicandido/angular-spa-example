import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Request, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { InterceptorModule, Interceptor } from 'angular-http-interceptor'
import { MyInterceptor } from './interceptors'

import { RouterModule } from "@angular/router"
import { routes } from "./app.routes"

import { AuthModule, AuthService } from "angular-spa/auth";

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { InterceptorComponent } from './interceptor/interceptor.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    InterceptorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routes,
    InterceptorModule,
    AuthModule
  ],
  providers: [
    {
      provide: Interceptor,
      useClass: MyInterceptor,
      multi: true
    }, {
      provide: AuthService,
      useValue: new AuthService(
        {
          url: "http://localhost:9080/auth",
          realm: "master",
          clientId: "teste"
        })
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
