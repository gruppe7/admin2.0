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
** Author: Elias Sundby Aukan
** This service handles a single user login --> do not mistake this for user/users.service
*/
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var mock_users_1 = require('../users/mock-users');
var UserService = (function () {
    function UserService() {
        this.token = localStorage.getItem('auth_token');
    }
    /*  login(username, password) {
    
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
    
        return this.http
          .post(
            '/login',
            JSON.stringify({ username, password }),
            { headers }
          )
          .map(res => res.json())
          .map((res) => {
            if (res.success) {
              localStorage.setItem('auth_token', res.auth_token);
              this.loggedIn = true;
            }
    
            return res.success;
          });
    
      }
      */
    UserService.prototype.login_mock = function (username, password) {
        for (var _i = 0, USERS_1 = mock_users_1.USERS; _i < USERS_1.length; _i++) {
            var user = USERS_1[_i];
            if (user.username == username && user.password == password) {
                this.token = 'token';
                localStorage.setItem('auth_token', this.token);
                return true;
            }
        }
        return false;
    };
    UserService.prototype.logout = function () {
        this.token = undefined;
        localStorage.removeItem('auth_token');
        return Observable_1.Observable.of(true);
    };
    UserService.prototype.isLoggedIn = function () {
        return !!localStorage.getItem('auth_token');
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map