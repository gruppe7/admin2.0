/*
**  Autor: Elias Sundby Aukan
**
*/

import { Injectable } from '@angular/core';
import { Student } from './index';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const STUDENTS: Student[] = [
  {  username: 'test', firstname: 'test', lastname: 'test', studyprogram: 'test', year: 2016, verified: true, studentCardId: 1111111111,}
]

@Injectable()
export class StudentService{
  constructor(private http: Http){};

  newStudent(student: Student) {
    console.log('****' + student.username)
    let headers = new Headers();
      return this.http.post('http://localhost:8443/students/', JSON.stringify({
        username: student.username,
        firstname: student.firstname,
        lastname: student.lastname,
        studentCardId: student.studentCardId,
        year: student.year,
        studyId:student.studyprogram
      }),
      {
        headers: headers
      })
      .map((response: Response) => {
              let student = response.json();
              console.log('new student ' + student);
      });
  }


  getStudents(): Promise<Student[]>{
    return Promise.resolve(STUDENTS);
  }

  getStudentFromCardId(cardId: number): Promise<Student>{
    for(let Student of STUDENTS){
      if(cardId == Student.studentCardId){
        return Promise.resolve(Student);
      }
    }
    return null;
  }

}
