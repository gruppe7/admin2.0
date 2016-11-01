// Author@Henrik Bjørkheim


import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { Locker, LOCKERS } from './index';



@Injectable()
export class LockerService{

  //constructor(private jsonp: Jsonp) {}
  constructor(){}

  getLockers(): Promise<Locker[]> {
      return Promise.resolve(LOCKERS);
  }


  search(term): Promise<Locker[]>{
    /*
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
                .get('Her legger vi inn callback fra Gunnar', { search })
                .map((response) => response.json()[1]);
    */
   let foundLockers: Locker[] = [];
    for(let Locker of LOCKERS){
      if(+term === Locker.id){
        foundLockers.push(Locker);
      }
      return Promise.resolve(foundLockers);
    }
  }
}
