// Author@Henrik Bjørkheim

import { Component } from '@angular/core';

import { Locker } from '../locker';
import { LockerComponent } from '../locker.component';
import { LockerRent } from './lockerRent';



@Component({
  selector: 'lockerRent',
  template: `
  <div id="epost">
    <h1>{{lockerComponent.selectedLocker.id}}</h1>
    <input type="epost" name="epost">
    <input type="submit" value="Til betaling" (click)="holdLocker()">
    <div id="info">Fyll inn din student-epost (brukernavn@stud.ntnu.no)</div>
  </div>
`
})

export class LockerRentComponent {
  constructor(private lockerComponent: LockerComponent){};

  holdLocker(){
    this.lockerComponent.rentLocker = true;
  }


  sendEmail(){

  }

}
