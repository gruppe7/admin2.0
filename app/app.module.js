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
**  This is the application module, that ties the components together.
**
*/
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./dashboard/index");
var index_2 = require("./events/index");
var index_3 = require("./locker/index");
var index_4 = require("./student/index");
var index_5 = require("./login/index");
var index_6 = require("./profile/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.routing,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            index_2.EventsComponent,
            index_2.EventAttendComponent,
            index_3.LockerComponent,
            index_3.LockerDetailComponent,
            index_3.LockerRentComponent,
            index_3.LockerPaymentComponent,
            index_1.DashboardComponent,
            index_5.LoginComponent,
            index_6.ProfileComponent,
            index_4.StudentComponent
        ],
        providers: [index_5.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map