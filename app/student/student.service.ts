/*
**  Autor: Elias Sundby Aukan
**
*/

import { Injectable } from '@angular/core';
import { Student } from './student';

const STUDENTS: Student[] = [
  {  username: 'test', firstname: 'test', lastname: 'test', studyprogram: 'test', year: 2016, verified: true, studentCardId: '000001',}
]

@Injectable()
export class StudentService{

  getStudents(): Promise<Student[]>{
    return Promise.resolve(STUDENTS);
  }

  getStudentFromCardId(cardId: string): Promise<Student>{
    for(let Student of STUDENTS){
      if(cardId == Student.studentCardId){
        return Promise.resolve(Student);
      }
    }
    return null;
  }

}
