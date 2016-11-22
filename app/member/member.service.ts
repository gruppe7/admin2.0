/*
**  Autor: Elias Sundby Aukan
**
*/

import { Injectable } from '@angular/core';
import { Member } from './index';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class MemberService{
  url = "http://localhost:8443";
  constructor(private http:Http){}


  registerMember(username: string, year: number, receipt: number){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = '{\"username\": ' + JSON.stringify(username) + ', \"year\": ' + year + ', \"receiptVipps\": ' + JSON.stringify(receipt) + '}';
    console.log(body);
    return this.http
      .post(this.url +'/members', body, options)
      .map((res: Response)=>this.extractData(res))
      .catch(this.handleError);
  }

  confirmMember(member: Member){

  }

  getMembers(){
    return this.http
      .get(this.url+"/members?token="+localStorage.getItem('token'))
      .map(this.extractData)
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
