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
    return this.getEvents().then(events => events.find(event => event.eventId === eventId));
  }
}
