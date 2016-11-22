/*
**  Autor: Elias Sundby Aukan
**
*/

import { Injectable } from '@angular/core';
import { Student, Study } from './index';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class StudentService{
  url = "http://localhost:8443";
  constructor(public http: Http){};

  newStudent(student: Student){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(student);

    console.log('****' + body  +"****");
    return this.http
      .post(this.url+"/students", body, options)
      .map((res: Response)=>this.extractData(res))
      .catch(this.handleError);


  }

  confirmStudent(token: string, username: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = "{\"token\": "+JSON.stringify(token) + "}";
    console.log(body);
    return this.http
      .put(this.url+"/students/?memberId="+username, body, options)
      .map((res:Response)=>this.extractData)
      .catch(this.handleError);
  }

  requestUpdate(username: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    console.log(this.url+"/students/"+username+"/updateCode");
    return this.http
      .post(this.url+"/students/"+username+"/updateCode", "{}", options)
      .map((res:Response)=>this.extractData(res))
      .catch(this.handleError);
  }


  updateStudent(student: Student, token:string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify({year: student.year, studyId: student.studyId, studentCardId: student.studentCardId, token: token});
    console.log(body);
    return this.http
      .put(this.url+"/students/" + student.username + "/update/", body, options)
      .map((res: Response)=>this.extractData(res))
      .catch(this.handleError);

  }

  getStudents(){
    return this.http
      .get(this.url+"/students")
      .map(this.extractData)
      .catch(this.handleError);
  }



  getStudentFromCardId(cardId: number){

  }

  getStudies(){
    return this.http
      .get(this.url+"/studies")
      .timeout(2000, new Error('Timeout, 2000ms'))
      .map(res => <Study[]> res.json())
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
