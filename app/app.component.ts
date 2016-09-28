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
    <h1 class="header">{{title}}</h1>
    <div>
    <nav>
      <a routerLink="/dashboard">Hjem</a>
      <a routerLink="/events">Events</a>
      <a routerLink="/lockers">Skap</a>
    </nav>
    </div>
    <router-outlet></router-outlet>

  `,
  providers: [EventService,
              LockerService]
})
export class AppComponent {
  title = 'admin2.0';
}
