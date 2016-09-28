import { Component, Input } from '@angular/core';

import { Event } from './event';

@Component({
  selector: 'event-details',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} Detaljer! </h2>
      <div><label>Navn: </label> {{event.name}}</div>
      <div>
        <label>Beskrivelse:</label> {{event.description}}
      </div>
    </div>
  `

})
export class EventDetailComponent{

}
