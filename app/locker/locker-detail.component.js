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
var locker_1 = require('./locker');
var LockerDetailComponent = (function () {
    function LockerDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', locker_1.Locker)
    ], LockerDetailComponent.prototype, "locker", void 0);
    LockerDetailComponent = __decorate([
        core_1.Component({
            selector: 'locker-detail',
            template: "\n    <div *ngIf=\"locker\">\n      <h2>{{locker.description}} details!</h2>\n      <div><label>id: </label>{{locker.id}}</div>\n      <div>\n        <label>description: </label>\n        <input [(ngModel)]=\"locker.description\" placeholder=\"description\"/>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], LockerDetailComponent);
    return LockerDetailComponent;
}());
exports.LockerDetailComponent = LockerDetailComponent;
//# sourceMappingURL=locker-detail.component.js.map