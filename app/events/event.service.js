/*
**  Author: Elias S. Aukan
**  This class handles basic event requests that does not require user login.
**
*/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var index_1 = require("./index");
var EventService = (function () {
    function EventService() {
    }
    /** Returns all events, only mock events for now **/
    EventService.prototype.getEvents = function () {
        return Promise.resolve(index_1.EVENTS);
    };
    /** Returns a single event by importing all events and find the requested one. Not yet used **/
    EventService.prototype.getEvent = function (eventId) {
        for (var _i = 0, EVENTS_1 = index_1.EVENTS; _i < EVENTS_1.length; _i++) {
            var Event_1 = EVENTS_1[_i];
            if (Event_1.eventId == eventId) {
                return Promise.resolve(Event_1);
            }
        }
        return null;
    };
    return EventService;
}());
EventService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map