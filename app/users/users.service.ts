/*
**  Author: Elias Sundby Aukan
*/
import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UsersService{
  getUsers(): Promise<User[]>{
    return Promise.resolve(USERS)
  }

  checkLoginTest(username: string, password: string): boolean{
    for(let User of USERS){
      if(User.username === username && User.password === password){
        return true;
      }
    }
    return false;
  }
}
