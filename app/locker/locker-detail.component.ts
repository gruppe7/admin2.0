// Author@Henrik Bjørkheim

import { Component, Input } from '@angular/core';

import { Locker } from './locker';

@Component({
  selector: 'locker-detail',
  template: `
    <div *ngIf="locker">
      <h2>{{locker.description}} details!</h2>
      <div><label>id: </label>{{locker.id}}</dib>
      <div>
        <label>description: </label>
        <input [(ngModel)]="locker.description" placeholder="description"/>
      </div>
    </div>
  `
})
export class LockerDetailtComponent{
  @Input()
  locker: Locker;
}
