/*
**  Author: Elias Dunby Aukan, Henrik Bjørkheim.
**  This class is the main component. This is where we display the component given by the router.
**
*/

import { Component, OnInit } from '@angular/core';

import { EventService } from './events/index';
import { LockerService } from './locker/index';
import { UsersService, User } from './users/index';
import { AuthenticationService, AuthGuard, AlertService, LoginComponent } from './login/index';
import { StudentService } from './student/index';

//fake backend
import { fakeBackendProvider } from './login/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';



@Component({
  selector: 'my-app',
  template: `
    <div id="header">
      <h1>{{title}}</h1>


    <nav>
      <a routerLink="/dashboard">Hjem</a>
      <a routerLink="/events">Events</a>
      <a routerLink="/lockers">Skap</a>
      <a routerLink="/register">Registrering</a>

      <a *ngIf="!login" routerLink="/login">Logg inn</a>
      <a *ngIf="login" routerLink="/login">Logg ut</a>

      <div *ngIf="login">
      <a *ngIf="login" routerLink="/">Profil</a>
      <a *ngIf="login" routerLink="/students">Studenter</a>
      <a *ngIf="login" routerLink="/">Opprett Event</a>
      <a *ngIf="login" routerLink="/">Administrer skap</a>
      <a *ngIf="login" routerLink="/">Legg til bruker</a>
      </div>
    </nav>
    </div>
    <div id="content">
    <router-outlet></router-outlet>
    </div>

  `,
  providers: [
    EventService,
    LockerService,
    UsersService,
    AuthenticationService,
    AuthGuard,
    StudentService,
    AlertService,
    User,

    // proveders for the fake backend:
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
            ]
})
export class AppComponent implements OnInit{
  title = 'ADMIN 2.0';
  login: boolean;


  constructor(){

  }

  ngOnInit(){
    if(localStorage.getItem('currentUser') !== null ){
      this.login = true;
    }else{
      this.login = false;
    }
  }



}
