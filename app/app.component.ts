import { Component } from '@angular/core';

import { EventService } from './events/event.service';

import { LockerService } form './locker.service';



@Component({
  selector: 'my-app',
  template: `
    <h1>Velkommen til Admin2.0</h1>
    <events></events>
    <locker-detail></locker-detail>
  `,
  providers: [EventService,
              LockerService]
})
export class AppComponent {
  constructor(private lockerService: LockerService) {}
  getLockers: void {
    this.lockerService.getLockers().then(lockers) => this.lockers=lockers);
  }
  ngOnInit(). void {
    this.getLockers();
  }
  onSelect(locker: Locker): void{
    this.selectedLocker = locker;
  }

}
