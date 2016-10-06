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
*/
var core_1 = require('@angular/core');
var mock_users_1 = require('../users/mock-users');
var LoginService = (function () {
    function LoginService() {
    }
    LoginService.prototype.getUsers = function () {
        return Promise.resolve(mock_users_1.USERS);
    };
    LoginService.prototype.checkLoginTest = function (username, password) {
        for (var _i = 0, USERS_1 = mock_users_1.USERS; _i < USERS_1.length; _i++) {
            var User_1 = USERS_1[_i];
            if (User_1.username === username && User_1.password === password) {
                return true;
            }
        }
        return false;
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map