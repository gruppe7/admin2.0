/*
**  Author: Elias Dunby Aukan, Henrik Bjørkheim.
**  This class is the main component. This is where we display the component given by the router.
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
var event_service_1 = require("./events/event.service");
var locker_service_1 = require("./locker/locker.service");
var users_service_1 = require("./users/users.service");
var user_1 = require("./users/user");
var index_1 = require("./login/index");
//fake backend
var fake_backend_1 = require("./login/fake-backend");
var testing_1 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ADMIN 2.0';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser') !== null) {
            this.login = true;
        }
        else {
            this.login = false;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div id=\"header\">\n      <h1>{{title}}</h1>\n\n\n    <nav>\n      <a routerLink=\"/dashboard\">Hjem</a>\n      <a routerLink=\"/events\">Events</a>\n      <a routerLink=\"/lockers\">Skap</a>\n      <a routerLink=\"/\">Registrering</a>\n      <a *ngIf=\"login\" routerLink=\"/\">Profil</a>\n\n      <a *ngIf=\"login\" routerLink=\"/\">Studenter</a>\n      <a *ngIf=\"login\" routerLink=\"/\">Opprett Event</a>\n      <a *ngIf=\"login\" routerLink=\"/\">Administrer skap</a>\n      <a *ngIf=\"login\" routerLink=\"/\">Legg til bruker</a>\n\n      <a *ngIf=\"!login\" routerLink=\"/login\">Logg inn</a>\n      <a *ngIf=\"login\" routerLink=\"/login\">Logg ut</a>\n    </nav>\n    </div>\n    <div id=\"content\">\n    <router-outlet></router-outlet>\n    </div>\n\n  ",
        providers: [
            event_service_1.EventService,
            locker_service_1.LockerService,
            users_service_1.UsersService,
            index_1.AuthenticationService,
            index_1.AuthGuard,
            index_1.AlertService,
            user_1.User,
            // proveders for the fake backend:
            fake_backend_1.fakeBackendProvider,
            testing_1.MockBackend,
            http_1.BaseRequestOptions
        ]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map