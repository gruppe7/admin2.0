import { Component } from '@angular/core';

import { StudentService } from './student.service';


@Component({
  selector: 'student-update',
  templateUrl: '/app/student/student-update.component.html'

})
export class StudentUpdateComponent{
  username = "";
  message ="";
  loading = false;
  constructor(private studentService: StudentService){

  }

  onSubmit(){
    this.loading = true;
    this.message ="";
    if(this.username != "" && this.username != null){
      this.studentService.requestUpdate(this.username)
        .subscribe(
          res => {
            this.message = "Epost sendt, det kan ta noen minutter";
            this.loading=false;
          },
          error => {
            this.message = error;
            this.loading = false;
          }
        );
      }else{
        this.message = "fyll inn ntnu-brukernavn først";
        this.loading = false;
      }
    }
}
