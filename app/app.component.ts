/*
**  Author: Elias Dunby Aukan, Henrik Bjørkheim.
**  This class is the main component. This is where we display the component given by the router.
**
*/

import { Component } from '@angular/core';

import { EventService } from './events/event.service';

import { LockerService } from './locker/locker.service';



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
    </nav>
    </div>
    <div id="content">
    <router-outlet></router-outlet>
    </div>

  `,
  providers: [EventService,
              LockerService]
})
export class AppComponent {
  title = 'ADMIN 2.0';
}
