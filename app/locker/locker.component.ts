 // Author@Henrik Bjørkheim

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Locker, LockerRentComponent } from './index';
import { LockerService } from './locker.service'; //have to go around the barrel to avoid errors

@Component({
  selector: 'lockers',
  templateUrl: 'app/locker/locker.component.html',
  providers: [LockerService]
})
export class LockerComponent {
  items: Array<string>;
  //term = new FormControl();
  term: string;
  lockers: Locker[];
  selectedLocker: Locker;
  selectAttend: boolean = false;
  rentLocker: boolean = false;
  constructor(private lockerService: LockerService) {
  }




  onAttend(): void{
     this.selectAttend = true;
  }

  getLockers(): void {
    this.lockerService.getLockers().then(lockers => this.lockers=lockers);
  }
  ngOnInit(): void {
    this.getLockers();
  }
  onSelect(locker: Locker): void{
    this.selectedLocker = locker;
    this.selectAttend = false;
  }


  search(): void {
    this.lockerService.search(this.term).then(lockers => this.lockers=lockers);
  }
}
