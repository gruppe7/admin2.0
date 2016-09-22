//Auhtor: Elias S. Aukan
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
var core_1 = require('@angular/core');
var event_service_1 = require('./event.service');
var EventsComponent = (function () {
    function EventsComponent(eventService) {
        this.eventService = eventService;
    }
    EventsComponent.prototype.onSelect = function (event) {
        this.selectedEvent = event;
    };
    EventsComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents().then(function (events) { return _this.events = events; });
    };
    EventsComponent = __decorate([
        core_1.Component({
            selector: 'events',
            template: "\n    <h2>Kommende eventer: </h2>\n    <ul class=\"eventer\">\n    <li *ngFor=\"let event of events\" [class.selected]=\"event===selectedEvent\" (click)=\"onSelect(event)\">\n      <span class=\"badge\"> {{event.id}}   </span>{{event.name}}\n    </li>\n    </ul>\n    <div *ngIf=\"selectedEvent\">\n      <h2> {{selectedEvent.name}}   </h2>\n      <h3> {{selectedEvent.description}}</h3>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map