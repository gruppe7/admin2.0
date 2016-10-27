//Author@Henrik Bjørkheim

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Locker } from '../locker';
import { LockerComponent } from '../locker.component';

@Component({
  selector: 'lockerPayment',
  template:`
  <div id="vipps">
  <form id="vipps-form">
    Kvittering fra Vipps:
    <br> <input type="text" name="kvittering">
  </form>
  </div>
  `
})

export class LockerPaymentComponent {
  receipt: string;
  constructor(){};
}
