/*
**  Author: Elias Dunby Aukan, Henrik Bjørkheim.
**  This class is the main component. This is where we display the component given by the router.
**
*/

import { Component, OnInit } from '@angular/core';


import { EventService } from './events/event.service';

import { LockerService } from './locker/locker.service';

import { UsersService } from './users/users.service';
import { User } from './users/user';

import { LoginComponent } from './login/login.component';
import { AuthenticationService, AuthGuard, AlertService} from './login/index';

//fake backend
import { fakeBackendProvider } from './login/fake-backend';
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
      <a *ngIf="login" routerLink="/">Profil</a>

      <a *ngIf="login" routerLink="/">Opprett Event</a>
      <a *ngIf="login" routerLink="/">Administrer skap</a>
      <a *ngIf="login" routerLink="/">Legg til bruker</a>

      <a *ngIf="!login" routerLink="/login">Logg inn</a>
      <a *ngIf="login" routerLink="/login">Logg ut</a>
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
