// Author@Henrik Bjørkheim

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { LockerService } from './locker.service';
import { Locker } from './locker';
import { LockerRentComponent } from './lockerRent/lockerRent.component';


@Component({
  selector: 'lockers',
  template: `
    <div  id="lockerOverview" *ngIf="!rentLocker">
      <div id="rent" *ngIf="selectedLocker">
        <ul><li id="link" (click)="onAttend()"> Lei skap </li></ul>
        <div id="attend" *ngIf="selectAttend">
        <lockerRent></lockerRent>
        </div>
      </div>
    <h3>Skapoversikt</h3>
    <ul class="skap">
    <p>
      <input type="text" [(ngModel)]="term"/>
      <button type="submit" (click)="search()"> Søk </button>
    </p>
      <li *ngFor="let locker of lockers" [class.selected]="locker===selectedLocker" (click)="onSelect(locker)" >
        <span id="indicator" class="badge"> Skap: {{locker.id}} Etasje: {{locker.floor}}
        <div *ngIf="locker.taken" id="ledRed"></div>
        <div *ngIf="!locker.taken" id="ledBlue"></div>
        </span>


      </li>
    </ul>
    </div>
    <div id="lockerRent" *ngIf="rentLocker">
    <lockerPayment></lockerPayment>
    </div>
  `,
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
  /*  this.term.valueChanges
              .debounceTime(400)
              .distinctUntilChanged()
              .switchMap(term => this.lockerService.search(term)
              .subscribe(items => this.items = items));
              */
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
      //.then(items => this.items = items);
  }
}
