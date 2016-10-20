// Author@Henrik Bjørkheim

import { Component } from '@angular/core';

import { LockerRent } from './lockerRent';

import { Locker } from './locker';
import { LockerComponent } from './locker.component';

import { LockerRentService } from './lockerRent.service';


@Component({
  selector: 'lockerRent',
  template: `
  <div id="epost">
  <form id="epost-form" ng-submit="sendEmail()">
    <input type="email" name="epost">
    <input type="submit" value="Send Epost">
    <div id="info">Fyll inn din student-epost (brukernavn@stud.ntnu.no)</div>
  </form>
  </div>
`
})

export class LockerComponent {
  constructor(private lockerService: LockerRentService) {}

  sendEmail(){

  }

}
