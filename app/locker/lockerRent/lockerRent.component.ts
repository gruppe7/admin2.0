// Author@Henrik Bjørkheim

import { Component } from '@angular/core';

import { Locker, LockerComponent, LockerRent } from '../index';

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
