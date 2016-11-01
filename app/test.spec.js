/*
**  Author: Elias Sundby Aukan
**  This class contains all the tests run with jasmine/karma
*/
"use strict";
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var index_1 = require("./events/index");
var index_2 = require("./locker/index");
var index_3 = require("./login/index");
/**  EventService  **/
describe('Testing EventService', function () {
    var eventService;
    var stdTime;
    beforeEach(function () {
        eventService = new index_1.EventService();
    });
    it('#getEvents should return all events', function (done) {
        eventService.getEvents().then(function (events) {
            expect(events[0].name).toBe('Skolestart');
            expect(events).toEqual(jasmine.any(Array));
            done();
        });
    });
    it('#getEvent should return a single event', function (done) {
        eventService.getEvent(1).then(function (event) {
            expect(event).toEqual(jasmine.any(Object));
            done();
        });
    });
});
/**  LockerService  **/
describe('Testing LockerService', function () {
    var lockerService;
    beforeEach(function () { lockerService = new index_2.LockerService(); });
    it('#getLockers should return all the lockers', function (done) {
        lockerService.getLockers().then(function (lockers) {
            expect(lockers[0].id).toBe(101);
            expect(lockers).toEqual(jasmine.any(Array));
            done();
        });
    });
    it('#search should return lockers matching the search term', function (done) {
        lockerService.search('101').then(function (lockers) {
            expect(lockers).toEqual(jasmine.any(Array));
            done();
        });
    });
});
/** AuthenticationService -- not yet implemented **/
describe('Testing Authentication', function () {
    var authService;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ providers: [index_3.AuthenticationService, http_1.Http] });
    });
});
//# sourceMappingURL=test.spec.js.map