import { Component } from '@angular/core';

import { EventService } from './events/event.service';


@Component({
  selector: 'my-app',
  template: `
    <h1>Velkommen til Admin2.0</h1>
    <events></events>
    <locker-detail></locker-detail>
  `,
  providers: [EventService]
})
export class AppComponent { }
