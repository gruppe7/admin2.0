// Author@Henrik Bjørkheim

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { LockerService } from './locker.service';
import { Locker } from './locker';



@Component({
  selector: 'lockers',
  template: `
    <h3>Skapoversikt</h3>
    <ul class="skap">
    <p>
      <input type="text" [(ngModel)]="term"/>
      <button type="submit" (click)="search()"> søk </button>
    </p>
      <li *ngFor="let locker of lockers" [class.selected]="locker===selectedLocker" (click)="onselect(locker)" >
        <span class="badge"> Skapnummer: {{locker.id}}   </span> Etasje: {{locker.floor}}
      </li>
    </ul>
    <locker-detail></locker-detail>
  `,
  providers: [LockerService]
})
export class LockerComponent {
  items: Array<string>;
  //term = new FormControl();
  term: string;
  lockers: Locker[];
  selectedLocker: Locker;
  constructor(private lockerService: LockerService) {
  /*  this.term.valueChanges
              .debounceTime(400)
              .distinctUntilChanged()
              .switchMap(term => this.lockerService.search(term)
              .subscribe(items => this.items = items));
              */
  }

  getLockers(): void {
    this.lockerService.getLockers().then(lockers => this.lockers=lockers);
  }
  ngOnInit(): void {
    this.getLockers();
  }
  onSelect(locker: Locker): void{
    this.selectedLocker = locker;
  }
  search(): void {
    this.lockerService.search(this.term).then(lockers => this.lockers=lockers);
      //.then(items => this.items = items);
  }
}
