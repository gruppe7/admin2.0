/*
**  Author: Elias Dunby Aukan, Henrik Bjørkheim.
**  This class is the main component. This is where we display the component given by the router.
**
*/

import { Component, OnInit } from '@angular/core';

import { EventService } from './events/index';
import { LockerService } from './locker/index';
import { UsersService, User } from './users/index';
import { AuthGuard, AlertService, LoginComponent } from './login/index';
import { StudentService, FilterArrayPipe } from './student/index';

//fake backend
import { fakeBackendProvider } from './login/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';



@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [
    EventService,
    LockerService,
    UsersService,
    AuthGuard,
    FilterArrayPipe,
    AlertService,
    User,

    // proveders for the fake backend:
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
            ]
})
export class AppComponent implements OnInit{
  title = 'ADMIN 2.0';
  login: boolean;


  constructor(){
    if(localStorage.getItem('currentUser') !== null ){
      this.login = true;
    }else{
      this.login = false;
    }
  }

  ngOnInit(){

  }



}
