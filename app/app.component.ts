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
import { UserService } from './login/user.service';
import { LoggedInGuard } from './login/login.guard';



@Component({
  selector: 'my-app',
  template: `
    <div id="header">
      <h1>{{title}}</h1>


    <nav>
      <a routerLink="/dashboard">Hjem</a>
      <a routerLink="/events">Events</a>
      <a routerLink="/lockers">Skap</a>
      <a routerLink="/login"> Logg inn </a>
      <div *ngIf="login">{{username}}</div>
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
    UserService,
    LoggedInGuard,
    User
            ]
})
export class AppComponent {
  title = 'ADMIN 2.0';
  login: boolean;

  constructor(userService: UserService){
    this.login = userService.isLoggedIn();
  }



}
