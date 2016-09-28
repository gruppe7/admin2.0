import { Component } from '@angular/core';

import { EventService } from './events/event.service';

import { LockerService } from './locker/locker.service';



@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Hjem</a>
      <a routerLink="/events">Events</a>
      <a routerLink="/lockers">Skap</a>
    </nav>
    <router-outlet></router-outlet>

  `,
  providers: [EventService,
              LockerService]
})
export class AppComponent {
  title = 'admin2.0';
}
