/*
**  Author: Elias Sundby Aukan
*/

import { inject } from '@angular/core/testing';
import { EventService } from './events/event.service';

describe('Testing EventService', () => {
  let service: EventService;

  beforeEach(() => { service = new EventService(); });

  it('#getEvents should return all the mock events', done => {
    service.getEvents().then(events => {
      expect(events[0].name).toBe('Skolestart');
      done();
    });
  })
})
