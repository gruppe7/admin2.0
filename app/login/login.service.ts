/*
**  Author: Elias Sundby Aukan
*/
import { Injectable } from '@angular/core';

import { User } from '../users/user';
import { USERS } from '../users/mock-users';

@Injectable()
export class LoginService{
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
