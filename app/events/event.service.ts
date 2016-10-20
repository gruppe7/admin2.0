 //Author: Elias S. Aukan

import { Injectable } from '@angular/core';

import { Event } from './event';
import { EVENTS } from './mock-events';

@Injectable()
export class EventService {
  getEvents(): Promise<Event[]> {
    return Promise.resolve(EVENTS);
  }

  getEvent(eventId: number): Promise<Event> {
    for(let Event of EVENTS){
      if(Event.eventId == eventId){
        return Promise.resolve(Event);
      }
    }
    return null;
  }
}
