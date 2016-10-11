// Author@Henrik Bjørkheim


import { Injectable } from '@angular/core';
import { LockerRent } from './lockerRent';
import { LOCKERRENT } from './mock-lockerRent';


@Injectable()
export class LockerRentService{
  getLockers(): Promise<LockerRent[]> {
      return Promise.resolve(LOCKERRENT);
  }
}
