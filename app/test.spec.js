/*
**  Author: Elias Sundby Aukan
*/
"use strict";
var event_service_1 = require('./events/event.service');
describe('Testing EventService', function () {
    var service;
    beforeEach(function () { service = new event_service_1.EventService(); });
    it('#getEvents should return all the mock events', function (done) {
        service.getEvents().then(function (events) {
            expect(events[0].name).toBe('Skolestart');
            done();
        });
    });
});
//# sourceMappingURL=test.spec.js.map