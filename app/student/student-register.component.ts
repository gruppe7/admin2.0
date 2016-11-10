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
  loading =false;
  message ="";

  constructor(private studentService: StudentService){};

  onSubmit(){
    this.loading =true;

    if(this.model.username != "" && this.model.username != null){
      this.studentService.newStudent(this.model).subscribe(
                                    res =>{
                                      this.model= new Student();
                                      this.loading = false;
                                      this.message = "registrering fullført!"
                                      this.registred = true;
                                    },
                                    error=> {
                                      this.loading = false;
                                      this.registred = true;
                                      this.message = error;

                                    }
                                  );
    }



  }


}
