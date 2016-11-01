/*
**  Author: Elias Sundby Aukan
**  This is called upon on startup, and bootstraps the system.
**
*/
"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var index_1 = require("./login/index");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule, [index_1.AuthGuard]);
//# sourceMappingURL=main.js.map