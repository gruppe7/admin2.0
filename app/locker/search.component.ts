// Author@Henrik Bjørkheim

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { Locker } from './locker';
import { LockerService } from './locker.service';

@Component({
  selector: 'search',
  template: `
  <h1>Search</h1>
  <p>

  </p>
  `,
  providers: [Locker]
})
export class SearchComponent {
  constructor(
    public id: number,
    public etg: number
  ){}
}
