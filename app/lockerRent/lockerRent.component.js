// Author@Henrik Bjørkheim
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
var lockerRent_service_1 = require('./lockerRent.service');
var LockerComponent = (function () {
    function LockerComponent(lockerService) {
        this.lockerService = lockerService;
    }
    LockerComponent.prototype.sendEmail = function () {
    };
    LockerComponent = __decorate([
        core_1.Component({
            selector: 'lockerRent',
            template: "\n  <div id=\"epost\">\n  <form id=\"epost-form\" ng-submit=\"sendEmail()\">\n    <input type=\"email\" name=\"epost\">\n    <input type=\"submit\" value=\"Send Epost\">\n    <div id=\"info\">Fyll inn din student-epost (brukernavn@stud.ntnu.no)</div>\n  </form>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [lockerRent_service_1.LockerRentService])
    ], LockerComponent);
    return LockerComponent;
}());
exports.LockerComponent = LockerComponent;
//# sourceMappingURL=lockerRent.component.js.map