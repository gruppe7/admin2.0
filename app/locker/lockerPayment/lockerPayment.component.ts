//Author@Henrik Bjørkheim

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { LockerComponent, Locker } from '../index';

@Component({
  selector: 'lockerPayment',
  templateUrl: 'app/locker/lockerPayment/lockerPayment.component.html'
})

export class LockerPaymentComponent {
  receipt: string;
  constructor(){};
}
