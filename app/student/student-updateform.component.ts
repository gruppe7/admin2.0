import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import{ StudentService, Student, Study } from './index';

@Component({
  selector: "student-updateform",
  templateUrl: "app/student/student-updateform.component.html"
}
)
export class StudentUpdateFormComponent implements OnInit{
  model: Student = {  username: '', firstname: '', lastname: '', studyId: '', year: null, verified: false, studentCardId: null};
  loading = false;
  message ="";
  studies: Study[];
  subscription: Subscription;
  token = localStorage.getItem('token');

  constructor(private studentService: StudentService, private route: ActivatedRoute){}

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

    this.subscription = this.route.queryParams.subscribe(
      (param: any) => {
        this.model.username = param['username'];
        this.token= param['token'];
      });



  }

  onSubmit(){
    this.loading =true;
    this.studentService.updateStudent(this.model, this.token).subscribe(
      res => {
        this.message = "Endringene er registrert";
        this.loading = false;
      },
      error => {
        this.message = error;
        this.loading = false;
      }
    )
  }
}
