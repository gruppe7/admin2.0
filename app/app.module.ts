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
import { EventsComponent, EventAttendComponent } from './events/index';
import { LockerComponent, LockerDetailComponent, LockerRentComponent, LockerPaymentComponent } from './locker/index';
import { StudentService, StudentComponent, StudentRegisterComponent, StudentUpdateComponent, StudentUpdateFormComponent, FilterArrayPipe, ObjectPipe } from './student/index';
import { LoginComponent, AuthGuard } from './login/index';
import { ProfileComponent } from './profile/index';

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
    StudentUpdateFormComponent,
    FilterArrayPipe,
    ObjectPipe
  ],
  providers: [ AuthGuard, StudentService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
