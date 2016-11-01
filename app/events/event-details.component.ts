/*
**  Author: Elias Sundby Aukan
**  This lists out the information of a given Event.
**  Temporarily not used.
*/
import { Component, Input } from '@angular/core';

import { Event } from './index';

@Component({
  selector: 'event-details',
  template: `
    <div *ngIf="event">
      <h2>{{event.name}} Detaljer! </h2>
      <div><label>Navn: </label> {{event.name}}</div>
      <div>
        <label>Beskrivelse:</label> {{event.description}}
      </div>
    </div>
  `

})
export class EventDetailsComponent{

}
