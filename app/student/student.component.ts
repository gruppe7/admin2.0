import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Student } from './student';
import { StudentService } from './student.service';




@Component({
  selector: 'students',
  templateUrl: 'app/student/student.component.html'
})

export class StudentComponent{
  students: Student[];
  selectedStudent: Student;

  constructor(private studentService: StudentService){

  }

  editUsername(student: Student, string: name): string{
    this.selectedStudent=student;
    student.username=name;
    return student.username;
  }
}
