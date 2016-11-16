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
import { Pipe, PipeTransform } from '@angular/core';


import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/index';
import { EventsComponent, EventAttendComponent, EventService } from './events/index';
import { LockerComponent, LockerDetailComponent, LockerRentComponent, LockerPaymentComponent, LockerService } from './locker/index';
import { StudentService, StudentComponent, StudentUpdateComponent, StudentRegisterComponent, FilterArrayPipe } from './student/index';
import { LoginComponent, AuthGuard, AuthenticationService, AlertService  } from './login/index';
import { ProfileComponent, ProfileService } from './profile/index';
import { UsersService, User } from './users/index';

//fake backend
import { fakeBackendProvider } from './login/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

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
    StudentComponent,
    StudentRegisterComponent,
    StudentUpdateComponent,
    FilterArrayPipe
  ],
  providers: [
    AuthGuard,
    StudentService,
    EventService,
    LockerService,
    UsersService,
    AuthenticationService,
    AuthGuard,
    FilterArrayPipe,
    AlertService,
    User,

    // proveders for the fake backend:
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
