"use strict";
var router_1 = require('@angular/router');
var events_component_1 = require('./events/events.component');
var locker_component_1 = require('./locker/locker.component');
var appRoutes = [
    {
        path: 'events',
        component: events_component_1.EventsComponent
    },
    {
        path: 'lockers',
        component: locker_component_1.LockerComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map