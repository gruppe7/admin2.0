 /*
**  Author: Elias S. Aukan
**  This class handles basic event requests that does not require user login.
**
*/

import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Event } from './index';

@Injectable()
export class EventService {

  url = "http://localhost:8443";
  constructor(public http: Http){};

  attendEvent(username: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(username);

    /** ToDo: legg inn http-post request **/
  }


  newEvent(event: Event){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(event);
    return this.http
      .post(this.url+"/events", body, options)
      .map((res: Response) => this.extractData(res))
      .catch(this.handleError);
  }

  /** Returns all events **/
  getEvents() {
    console.log("GET " + this.url+"/events")
    return this.http
      .get(this.url + "/events")
      .map((res:Response)=> <Event[]> res.json())
      .catch(this.handleError);
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
