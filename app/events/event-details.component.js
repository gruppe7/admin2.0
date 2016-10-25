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
/*
**  Author: Elias Sundby Aukan
**  This lists out the information of a given Event.
**  Temporarily not used.
*/
var core_1 = require('@angular/core');
var EventDetailsComponent = (function () {
    function EventDetailsComponent() {
    }
    EventDetailsComponent = __decorate([
        core_1.Component({
            selector: 'event-details',
            template: "\n    <div *ngIf=\"event\">\n      <h2>{{event.name}} Detaljer! </h2>\n      <div><label>Navn: </label> {{event.name}}</div>\n      <div>\n        <label>Beskrivelse:</label> {{event.description}}\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map