/*
** Author: Elias Sundby Aukan
** This service handles a single user login --> do not mistake this for user/users.service
*/
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { USERS } from '../users/mock-users';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

/*  login(username, password) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        '/login',
        JSON.stringify({ username, password }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.success;
      });

  }
  */

  login_mock(username, password){
    for(let user of USERS){
      if(user.username == username && user.password == password){
        return true;
      }
    }
    return false;
  }



  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
