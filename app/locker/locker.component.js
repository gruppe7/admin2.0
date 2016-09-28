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
var locker_service_1 = require('./locker.service');
var LockerComponent = (function () {
    function LockerComponent(lockerService) {
        this.lockerService = lockerService;
    }
    LockerComponent.prototype.getLockers = function () {
        var _this = this;
        this.lockerService.getLockers().then(function (lockers) { return _this.lockers = lockers; });
    };
    LockerComponent.prototype.ngOnInit = function () {
        this.getLockers();
    };
    LockerComponent.prototype.onSelect = function (locker) {
        this.selectedLocker = locker;
    };
    LockerComponent = __decorate([
        core_1.Component({
            selector: 'lockers',
            template: "\n    <h3>Skapoversikt</h3>\n    <ul class=\"skap\">\n      <li *ngFor=\"let locker of lockers\" [class.selected]=\"locker===selectedLocker\" (click)=\"onselect(locker)\" >\n        <span class=\"badge\"> Skapnummer: {{locker.id}}   </span> Etasje: {{locker.floor}}\n      </li>\n    </ul>\n    <locker-detail></locker-detail>\n  ",
            providers: [locker_service_1.LockerService]
        }), 
        __metadata('design:paramtypes', [locker_service_1.LockerService])
    ], LockerComponent);
    return LockerComponent;
}());
exports.LockerComponent = LockerComponent;
//# sourceMappingURL=locker.component.js.map