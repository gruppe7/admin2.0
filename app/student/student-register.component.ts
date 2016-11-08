/**
**  Author: Elias Sundby Aukan, Henrik Bjørkheim
**
*/

import { Component } from '@angular/core';

import { Student, StudentComponent } from './index';
import { StudentService } from './student.service';

import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'student-register',
  templateUrl: 'app/student/student-register.component.html'
})

export class StudentRegisterComponent {
  model = new Student();
  registred = false;
  errorMessage ="";

  constructor(private studentService: StudentService){};

  onSubmit(){
    let registerOperation:Promise<Student>;

    if(this.model.username != "" && this.model.username != null){
      registerOperation = this.studentService.newStudent(this.model);
    }

    registerOperation.then(
                                  res =>{
                                    this.model= new Student();
                                  },
                                  error=> {
                                    this.errorMessage = error;
                                  }
                                );


  }


}
