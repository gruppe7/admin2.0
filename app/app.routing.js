/*
**  Author: Elias Sundby Aukan
**  This class manages routing in the web app.
**  Here we declare which component that is displayed at what path.
*/
"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./events/index");
var index_2 = require("./locker/index");
var index_3 = require("./dashboard/index");
var index_4 = require("./student/index");
var index_5 = require("./login/index");
var index_6 = require("./profile/index");
/*
**  appRoutes declares the paths with content
*/
var appRoutes = [
    {
        path: 'events',
        component: index_1.EventsComponent
    },
    {
        path: 'lockers',
        component: index_2.LockerComponent
    },
    {
        path: 'dashboard',
        component: index_3.DashboardComponent
    },
    {
        path: 'login',
        component: index_5.LoginComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: index_6.ProfileComponent,
        canActivate: [index_5.AuthGuard]
    },
    {
        path: 'students',
        component: index_4.StudentComponent,
        canActivate: [index_5.AuthGuard]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map