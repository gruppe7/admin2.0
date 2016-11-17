/**
**  Author: Elias Sundby Aukan, Henrik Bjørkheim
**
*/

import { Component, OnInit } from '@angular/core';

import { Student, StudentComponent, Study, StudentService } from './index';
//import { StudentService } from './student.service';

import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'student-register',
  templateUrl: 'app/student/student-register.component.html'
})

export class StudentRegisterComponent implements OnInit{
  model = new Student();
  registred = false;
  loading =false;
  message ="";
  studies: Study[];

  constructor(private studentService: StudentService){};

  ngOnInit(){
  this.studentService.getStudies()
      .subscribe(
          res=>{
            this.studies=res;
          },
          error =>{
            this.message = "Klarte ikke laste inn studieretninger, prøv å last inn siden på nytt.";
          }
      )
  }

  onSubmit(){
    this.loading =true;
    this.message = "";
    if(this.model.username != "" && this.model.username!=null){
      this.studentService.newStudent(this.model)
      .subscribe(
                                    res =>{
                                      this.model= new Student();
                                      this.loading = false;
                                      this.message = "registrering fullført!";
                                      this.registred = true;
                                    },
                                    error=> {
                                      this.loading = false;
                                      this.registred = true;
                                      this.message = error;

                                    }
                                  );
    }else{
      this.registred = true;
      this.message = "fyll inn brukernavn!";
      this.loading=false;

    }



  }


}
