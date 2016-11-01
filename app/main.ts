/*
**  Author: Elias Sundby Aukan
**  This is called upon on startup, and bootstraps the system.
**
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { AuthGuard, AuthenticationService } from './login/index';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, [AuthGuard]);
