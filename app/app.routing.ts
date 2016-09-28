//Author: Elias Sundby Aukan
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EventsComponent } from './events/events.component';
import { LockerComponent } from './locker/locker.component'

const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'lockers',
    component: LockerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
