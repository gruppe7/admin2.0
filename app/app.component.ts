import { Component } from '@angular/core';

import { EventService } from './events/event.service';

import { LockerService } from './locker/locker.service';



@Component({
  selector: 'my-app',
  template: `
    <h1>Velkommen til Admin2.0</h1>
    <a routerLink="/events">Events</a>
    <a routerLink="/lockers">Skap</a>
    <router-outlet></router-outlet>
  `,
  providers: [EventService,
              LockerService]
})
export class AppComponent {
}
