/*
**  Author: Elias Sundby Aukan
**  This is the application module, that ties the components together.
**
*/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { JsonpModule } from '@angular/http';


import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/index';
import { EventsComponent, EventAttendComponent, EventFilterPipe, EventService, EventRegisterComponent } from './events/index';
import { LockerComponent, LockerDetailComponent, LockerRentComponent, LockerPaymentComponent } from './locker/index';
import { StudentService, StudentListComponent, StudentRegisterComponent, StudentUpdateComponent, StudentUpdateFormComponent, StudentFilterPipe, StudentConfirmComponent } from './student/index';
import { MemberService, MemberRegisterComponent, MemberListComponent, MemberFilterPipe } from './member/index';

import { LoginComponent, AuthGuard, AuthenticationService } from './login/index';

import { ProfileComponent } from './profile/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    EventsComponent,
    EventAttendComponent,
    EventRegisterComponent,
    EventFilterPipe,
    LockerComponent,
    LockerDetailComponent,
    LockerRentComponent,
    LockerPaymentComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    StudentListComponent,
    StudentRegisterComponent,
    StudentUpdateComponent,
    StudentUpdateFormComponent,
    StudentFilterPipe,
    StudentConfirmComponent,
    MemberRegisterComponent,
    MemberListComponent,
    MemberFilterPipe,
  ],
  providers: [ AuthGuard, StudentService, MemberService, AuthenticationService, EventService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
