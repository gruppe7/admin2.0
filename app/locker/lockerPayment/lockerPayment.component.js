//Author@Henrik Bjørkheim
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
var LockerPaymentComponent = (function () {
    function LockerPaymentComponent() {
    }
    ;
    LockerPaymentComponent = __decorate([
        core_1.Component({
            selector: 'lockerPayment',
            template: "\n  <div id=\"vipps\">\n  <form id=\"vipps-form\">\n    Kvittering fra Vipps:\n    <br> <input type=\"text\" name=\"kvittering\">\n  </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], LockerPaymentComponent);
    return LockerPaymentComponent;
}());
exports.LockerPaymentComponent = LockerPaymentComponent;
//# sourceMappingURL=lockerPayment.component.js.map