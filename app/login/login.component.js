/*
**  Author: Elias Sundby Aukan
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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.login = false;
        this.error = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        if (this.userService.login_mock(this.username, this.password)) {
            this.login = true;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n    <div id=login>\n\n        <p>Brukernavn</p>\n        <input [(ngModel)]=\"username\" type=\"text\" id=\"username\" name=\"username\"><br>\n        <p>Passord:</p>\n        <input [(ngModel)]=\"password\" type=\"password\" id=\"password\" name=\"password\"> <br>\n          <button (click)=\"onSubmit()\" type=\"submit\">Logg inn</button>\n\n    </div>\n    <div *ngIf=\"login\">Logget inn som {{username}}</div>\n    <div *ngIf=\"!login\">Ikke logget inn</div>\n      "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map