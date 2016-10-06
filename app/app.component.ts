/*
**  Author: Elias Dunby Aukan, Henrik Bjørkheim.
**  This class is the main component. This is where we display the component given by the router.
**
*/

import { Component } from '@angular/core';

import { EventService } from './events/event.service';

import { LockerService } from './locker/locker.service';

import { UsersService } from './users/users.service';
import { LoginComponent } from './login/login.component';
import { User } from './users/user';


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
      <div *ngIf="employee || eventmanager">{{username}}</div>
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
    User
            ]
})
export class AppComponent {
  employee = false;
  eventmanager = false;
  username: string;
  title = 'ADMIN 2.0';

  constructor(private loginUser: User){
    this.employee = loginUser.employee;
    this.eventmanager = loginUser.eventmanager;
    this.username = loginUser.username;
  }



}
