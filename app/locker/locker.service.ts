// Author@Henrik Bjørkheim


import { Injectable } from '@angular/core';
import { Locker } from './locker';
import { LOCKERS } from './mock-lockers';


@Injectable()
export class LockerService{
  getLockers(): Promise<Locker[]> {
      return Promise.resolve(LOCKERS);
  }
}
