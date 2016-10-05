/*
**  Author: Elias Sundby Aukan
**  This component lets a student register to an event.
*/

import { Component } from '@angular/core';

import { Event } from './event';
import { EventsComponent } from './events.component';

@Component({
  selector: 'event-attend',
  template: `
    <div id="epost">
    <form id="epost-form" ng-submit="sendEmail()">
      <input type="email" name="epost">
      <input type="submit" value="Send Epost">
      <div id="info">Fyll inn epost-adressen din, så sender vi deg en mail med en instruksjoner! </div>
    </form>
    </div>
  `
})
export class EventAttendComponent{
  constructor(){};

  sendEmail(){

  }

}
