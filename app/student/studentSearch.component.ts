import { Component } from '@angular/core';
import { SearchService } from './studentSearch-service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'StudentSearch',
  template: `
    <div>
      <h2>Student Search</h2>
      <input type="text" [(ngModel)]="term">
      <ul>
        <li *ngFor="let item of items | async">{{item}}</li>
      </ul>
    </div>
  `
})
export class StudentSearchComponent {

  items: Observable<Array<string>>;
  term = new FormControl();

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    //this.items = this.SearchService.search(this.term.valueChanges);
    this.searchService.getStudents()
      .subscribe(
          res =>{
            this.items = res;
          }
      )
  }
}
