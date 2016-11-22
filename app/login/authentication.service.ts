/*
**  Author: Elias Sundby Aukan
**  This service handles the login and authentication requests
*/

import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  url = 'http://localhost:8443/users';
  constructor(private http: Http) { }

    login(username, password) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let body = '{\"username\": '+ JSON.stringify(username)+ ', \"password\": ' +JSON.stringify(password) + '}';
      console.log(body);
        return this.http.post(this.url, body, options)
            .map((res: Response) => {
                let user = res.json();
                console.log('login with ' + username + ' '+ password);
                if (user && user.token) {
                    localStorage.setItem('currentUser', username);
                    localStorage.setItem('token', user.token);
                    localStorage.setItem('employee', JSON.stringify(user.employee));
                    localStorage.setItem('eventManager', JSON.stringify(user.eventmanager));
                    console.log(localStorage.getItem('currentUser') + " "+localStorage.getItem('token') + " " +localStorage.getItem('employee') + " " + localStorage.getItem('eventManager'));
                }
            })
            .catch(this.handleError);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        localStorage.removeItem('employee');
        localStorage.removeItem('eventManager');
    }

    private extractData(res: Response) {
      let body = res.json();
      console.log(body);
      return body.data || { };
    }

    private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${err}`;

      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
}
