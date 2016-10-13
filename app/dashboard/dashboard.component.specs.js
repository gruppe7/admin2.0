/*
**  Author: Elias Sundby Aukan
**  For testing in the future
*/
"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var dashboard_component_1 = require("./dashboard.component");
var comp;
var fixture;
var de;
var el;
describe('DashboardComponent', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dashboard_component_1.DashboardComponent],
        });
        fixture = testing_1.TestBed.createComponent(dashboard_component_1.DashboardComponent);
        comp = fixture.componentInstance; // The test instance
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
});
//# sourceMappingURL=dashboard.component.specs.js.map