 /*
**  Author: Elias S. Aukan
**  This class handles basic event requests that does not require user login.
**
*/

import { Injectable } from '@angular/core';

import { Event } from './event';
import { EVENTS } from './mock-events';

@Injectable()
export class EventService {


  /** Returns all events, only mock events for now **/
  getEvents(): Promise<Event[]> {
    return Promise.resolve(EVENTS);
  }

  /** Returns a single event by importing all events and find the requested one. Not yet used **/
  getEvent(eventId: number): Promise<Event> {
    for(let Event of EVENTS){
      if(Event.eventId == eventId){
        return Promise.resolve(Event);
      }
    }
    return null;
  }
}
