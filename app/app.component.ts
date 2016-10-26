/*
**  Author: Elias Dunby Aukan, Henrik Bjørkheim.
**  This class is the main component. This is where we display the component given by the router.
**
*/

import { Component } from '@angular/core';


import { EventService } from './events/event.service';

import { LockerService } from './locker/locker.service';

import { UsersService } from './users/users.service';
import { User } from './users/user';

import { LoginComponent } from './login/login.component';
import { AuthenticationService, AuthGuard } from './login/index';

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
      <a routerLink="/profile">Profil</a>
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
    User,

    // proveders for the fake backend:
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
            ]
})
export class AppComponent {
  title = 'ADMIN 2.0';


  constructor(){

  }



}
