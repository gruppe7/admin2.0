/*
**  Author: Elias Sundby Aukan
**  This is the application module, that ties the components together.
**
*/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent }   from './app.component';
import { routing } from './app.routing';

import { DashboardComponent } from './dashboard/dashboard.component';

import { EventsComponent } from './events/events.component';
import { EventAttendComponent } from './events/event-attend.component';

import { LockerComponent } from './locker/locker.component';
import { LockerDetailComponent } from './locker/locker-detail.component';
import { LockerRentComponent } from './locker/lockerRent/lockerRent.component';
import { LockerPaymentComponent } from './locker/lockerPayment/lockerPayment.component';

import { StudentComponent } from './student/student.component';

import { LoginComponent, AuthGuard } from './login/index';


import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    EventsComponent,
    EventAttendComponent,
    LockerComponent,
    LockerDetailComponent,
    LockerRentComponent,
    LockerPaymentComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    StudentComponent
  ],
  providers: [ AuthGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
