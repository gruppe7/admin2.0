// Author@Henrik Bjørkheim

import { Component } from '@angular/core';

import { LockerService } from './locker.service';

import { Locker } from './locker';



@Component({
  selector: 'lockers',
  template: `
    <h1>Velkommen til Admin2.0</h1>
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
