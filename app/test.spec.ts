/*
**  Author: Elias Sundby Aukan
**  This class contains all the tests run with jasmine/karma
*/

import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';

import { EventService, Event } from './events/index';
import { LockerService, Locker } from './locker/index';
import { AuthenticationService } from './login/index';
import { User } from './users/index'


/**  EventService  **/
describe('Testing EventService', () => {
  let eventService: EventService;
  let stdTime;
  beforeEach(() => {
    eventService = new EventService();
   });

  it('#getEvents should return all events', done => {
    eventService.getEvents().then(events => {
      expect(events[0].name).toBe('Skolestart');
      expect(events).toEqual(jasmine.any(Array));
      done();
    });
  });


it('#getEvent should return a single event', done => {
  eventService.getEvent(1).then(event => {
    expect(event).toEqual(jasmine.any(Object));
    done();
  });
 });
});


/**  LockerService  **/
describe('Testing LockerService', () => {
  let lockerService: LockerService;
  beforeEach(() => { lockerService = new LockerService(); });

  it('#getLockers should return all the lockers', done => {
    lockerService.getLockers().then(lockers => {
      expect(lockers[0].id).toBe(101);
      expect(lockers).toEqual(jasmine.any(Array));
      done();
    });
  });


  it('#search should return lockers matching the search term', done => {
    lockerService.search('101').then( lockers =>{
      expect(lockers).toEqual(jasmine.any(Array));
      done();
    })
  })
});

/** AuthenticationService -- not yet implemented **/
describe('Testing Authentication', () =>{
  let authService: AuthenticationService;
  beforeEach(() => { TestBed.configureTestingModule({ providers: [AuthenticationService, Http]});
  });


});
