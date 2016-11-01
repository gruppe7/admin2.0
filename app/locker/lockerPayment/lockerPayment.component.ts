//Author@Henrik Bjørkheim

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Locker } from '../locker';
import { LockerComponent } from '../locker.component';

@Component({
  selector: 'lockerPayment',
  template: 'app/locker/lockerPayment/lockerPayment.component.html'
})

export class LockerPaymentComponent {
  receipt: string;
  constructor(){};
}
