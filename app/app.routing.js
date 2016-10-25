/*
**  Author: Elias Sundby Aukan
**  This class manages routing in the web app.
**  Here we declare which component that is displayed at what path.
*/
"use strict";
var router_1 = require('@angular/router');
var events_component_1 = require('./events/events.component');
var locker_component_1 = require('./locker/locker.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var login_component_1 = require('./login/login.component');
var login_guard_1 = require('./login/login.guard');
var profile_component_1 = require('./profile/profile.component');
/*
**  appRoutes declares the paths with content
*/
var appRoutes = [
    {
        path: 'events',
        component: events_component_1.EventsComponent
    },
    {
        path: 'lockers',
        component: locker_component_1.LockerComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [login_guard_1.LoggedInGuard]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map