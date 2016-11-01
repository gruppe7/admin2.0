// Author@Henrik Bjørkheim

import { Component } from '@angular/core';

import { Locker } from '../locker';
import { LockerComponent } from '../locker.component';
import { LockerRent } from './lockerRent';



@Component({
  selector: 'lockerRent',
  templateUrl: 'app/locker/lockerRent/lockerRent.component.html'
})

export class LockerRentComponent {
  constructor(private lockerComponent: LockerComponent){};

  holdLocker(){
    this.lockerComponent.rentLocker = true;
  }


  sendEmail(){

  }

}
