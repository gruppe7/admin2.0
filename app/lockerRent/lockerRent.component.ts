// Author@Henrik Bjørkheim

import { Component } from '@angular/core';

import { LockerRent } from './lockerRent';

import { LockerRentService } from './lockerRent.service';


@Component({
  selector: 'lockerRent',
  template: `
    <h3>Skapoversikt</h3>
    <ul class="skapLeie">
      <li *ngFor="let lockerRent of lockerRent" [class.selected]="lockerRent===selectedLockerRent" (click)="onselect(lockerRent)" >
        <span class="badge"> Skapleie id: {{lockerRent.lockerRentId}}   </span>
      </li>
    </ul>
    <locker-detail></locker-detail>
`,
providers: [LockerRentService]
})

export class LockerComponent {
  lockers: LockerRent[];
  selectedLocker: LockerRent;
  constructor(private lockerService: LockerRentService) {}
  
}
