// Author@Henrik Bjørkheim

import { Component, Input } from '@angular/core';

import { Locker } from './locker';

@Component({
  selector: 'locker-detail',
  template: `
    <div *ngIf="locker">
      <h2>{{locker.description}} details!</h2>
      <div><label>id: </label>{{locker.id}}</div>
      <div>
        <label>floor: </label>
        <input [(ngModel)]="locker.description" placeholder="description"/>
      </div>
    </div>
  `
})
export class LockerDetailComponent{
  @Input()
  locker: Locker;
}
