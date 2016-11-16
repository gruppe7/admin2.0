/*
**  Autor: Elias Sundby Aukan
**
*/

import { Injectable } from '@angular/core';
import { Student } from './index';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

const STUDENTS: Student[] = [
  {  username: 'test', firstname: 'test', lastname: 'test', studyId: 'test', year: 2016, verified: true, studentCardId: 1111111111}
]

@Injectable()
export class StudentService{
  constructor(public http: Http){};

  newStudent(student: Student){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(student);

    console.log('****' + body  +"****");
    return this.http
      .post("http://localhost:8443/students", body, options)
      .map((res: Response)=>this.extractData(res))
      .catch(this.handleError);


  }

  requestUpdate(username: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    console.log("prøver å sende epost");
    console.log("http://localhost:8443/students/"+username+"/updateCode");
    return this.http
      .post("http://localhost:8443/students/"+username+"/updateCode", "{}", options)
      .map((res:Response)=>this.extractData(res))
      .catch(this.handleError);
  }


  updateStudent(student: Student){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify({year: student.year, studyId: student.studyId, studentCardId: student.studentCardId});

    return this.http
      .post("http://localhost:8443/students/" + student.username + "updatestudent", body, options)
      .map((res: Response)=>this.extractData(res))
      .catch(this.handleError);

  }

  getStudents(){
    return this.http
      .get("http://localhost:8443/students")
      .map(this.extractData)
      .catch(this.handleError);
  }



  getStudentFromCardId(cardId: number): Promise<Student>{
    for(let Student of STUDENTS){
      if(cardId == Student.studentCardId){
        return Promise.resolve(Student);
      }
    }
    return null;
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
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}

}
