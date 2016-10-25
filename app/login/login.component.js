/*
**  Author: Elias Sundby Aukan
**  This is the login view with username/password input.
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
var router_1 = require("@angular/router");
var login_service_1 = require("./login.service");
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginService.logout(); //reset login status
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.loading = true;
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/']);
            }
            else {
                _this.error = 'Feil brukernavn eller passord';
                _this.loading = false;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        template: "\n    <div id=login>\n        <p>Brukernavn</p>\n        <input [(ngModel)]=\"model.username\" #username=\"ngModel\" required type=\"text\" id=\"username\" name=\"username\"><br>\n        <p>Passord:</p>\n        <input [(ngModel)]=\"model.password\" #password=\"ngModel\" required type=\"password\" id=\"password\" name=\"password\"> <br>\n          <button (click)=\"onSubmit()\" type=\"submit\">Logg inn</button>\n\n    </div>\n    <div *ngIf=\"login\">Logget inn som {{username}}</div>\n    <div *ngIf=\"!login\">Ikke logget inn</div>\n      "
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map