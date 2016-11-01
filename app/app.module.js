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
var dashboard_component_1 = require("./dashboard/dashboard.component");
var events_component_1 = require("./events/events.component");
var event_attend_component_1 = require("./events/event-attend.component");
var locker_component_1 = require("./locker/locker.component");
var locker_detail_component_1 = require("./locker/locker-detail.component");
var lockerRent_component_1 = require("./locker/lockerRent/lockerRent.component");
var lockerPayment_component_1 = require("./locker/lockerPayment/lockerPayment.component");
var student_component_1 = require("./student/student.component");
var index_1 = require("./login/index");
var profile_component_1 = require("./profile/profile.component");
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
            events_component_1.EventsComponent,
            event_attend_component_1.EventAttendComponent,
            locker_component_1.LockerComponent,
            locker_detail_component_1.LockerDetailComponent,
            lockerRent_component_1.LockerRentComponent,
            lockerPayment_component_1.LockerPaymentComponent,
            dashboard_component_1.DashboardComponent,
            index_1.LoginComponent,
            profile_component_1.ProfileComponent,
            student_component_1.StudentComponent
        ],
        providers: [index_1.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map