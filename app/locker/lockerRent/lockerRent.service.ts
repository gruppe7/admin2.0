// Author@Henrik Bjørkheim


import { Injectable } from '@angular/core';

import { LockerRent, LOCKERRENT } from '../index';

@Injectable()
export class LockerRentService{
  getLockers(): Promise<LockerRent[]> {
      return Promise.resolve(LOCKERRENT);
  }
}
