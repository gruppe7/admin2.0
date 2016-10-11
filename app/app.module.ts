import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EventsComponent } from './events/events.component';
import { EventAttendComponent } from './events/event-attend.component';

import { LockerComponent } from './locker/locker.component';
import { LockerDetailComponent } from './locker/locker-detail.component';

import { LoginComponent } from './login/login.component';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    EventsComponent,
    EventAttendComponent,
    LockerComponent,
    LockerDetailComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
