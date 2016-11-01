// Author@Henrik Bjørkheim

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';

import { Locker } from './index';
import { LockerService } from './locker.service'; //have to go around the barrel to avoid errors

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
