/*  Author: Elias Sundby Aukan
**  This class manages routing in the web app.
**  Here we declare which component that is displayed at what path.
*/

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { LockerComponent } from './locker/locker.component'
import { DashboardComponent } from './dashboard/dashboard.component';


/*
**  appRoutes declares the paths with content
*/
const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'lockers',
    component: LockerComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
