/*
**  Author: Elias Sundby Aukan
**  This class manages routing in the web app.
**  Here we declare which component that is displayed at what path.
*/

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/index';
import { LockerComponent } from './locker/index'
import { DashboardComponent } from './dashboard/index';
import { StudentComponent } from './student/index';
import { AuthGuard, LoginComponent } from './login/index';
import { ProfileComponent } from './profile/index';
import { StudentRegisterComponent, StudentUpdateComponent } from './student/index';




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
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'students',
    component: StudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: StudentRegisterComponent
  },
  {
    path: 'studentupdate',
    component: StudentUpdateComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
