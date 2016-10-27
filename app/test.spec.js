"use strict";
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var event_service_1 = require("./events/event.service");
var locker_service_1 = require("./locker/locker.service");
var index_1 = require("./login/index");
describe('Testing EventService', function () {
    var eventService;
    var stdTime;
    beforeEach(function () {
        eventService = new event_service_1.EventService();
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
describe('Testing LockerService', function () {
    var lockerService;
    beforeEach(function () { lockerService = new locker_service_1.LockerService(); });
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
describe('Testing Authentication', function () {
    var authService;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ providers: [index_1.AuthenticationService, http_1.Http] });
    });
});
