// Author@Henrik Bjørkheim

import { Component } from '@angular/core';

import { LockerService } from './locker.service';

import { Locker } from './locker';



@Component({
  selector: 'lockers',
  template: `
    <h3>Skapoversikt</h3>
    <ul class="skap">
      <li *ngFor="let locker of lockers" [class.selected]="locker===selectedLocker" (click)="onselect(locker)" >
        <span class="badge"> Skapnummer: {{locker.id}}   </span> Etasje: {{locker.floor}}
      </li>
    </ul>
    <locker-detail></locker-detail>
  `,
  providers: [LockerService]
})
export class LockerComponent {
  lockers: Locker[];
  selectedLocker: Locker;
  constructor(private lockerService: LockerService) {}

  getLockers(): void {
    this.lockerService.getLockers().then(lockers => this.lockers=lockers);
  }
  ngOnInit(): void {
    this.getLockers();
  }
  onSelect(locker: Locker): void{
    this.selectedLocker = locker;
  }
}
