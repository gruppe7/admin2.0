// Author@Henrik Bjørkheim

import { Component, Input } from '@angular/core';

import { Locker } from './index';

@Component({
  selector: 'locker-detail',
  template: 'app/locker/locker-detail.component.html'
})
export class LockerDetailComponent{
  @Input()
  locker: Locker;
}
