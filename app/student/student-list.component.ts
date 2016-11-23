/*
**  Author: Elias Sundby Aukan
*/
import { Component, OnInit } from '@angular/core';

import { Student } from './index';
import { StudentService }from './student.service';

@Component({
  selector: 'student-list',
  templateUrl: 'app/student/student-list.component.html'
})
export class StudentListComponent implements OnInit{
  students: Student[];
  selectedStudent: Student;
  selected = false;
  loading = false;
  message = "";

  constructor(private studentService: StudentService){}

  ngOnInit(){
    this.loading=true;
    this.studentService.getStudents()
      .subscribe(
        res=>{
          this.students = res;
          this.loading = false;
        },
        error =>{
          this.message = "noe gikk galt ved innlasting av studenter";
          this.loading = false;
        }
      )
  }

  onSelect(student: Student){
    this.selected = true;
    this.selectedStudent = student;
  }

}
