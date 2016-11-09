import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterArrayPipe } from './filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Student } from './index';
import { StudentService } from './student.service'; //have to go around the barrel to avoid errors





@Component({
  selector: 'students',
  templateUrl: 'app/student/student.component.html',
})

export class StudentComponent{
  students: Student[];
  selectedStudent: Student;

  constructor(private studentService: StudentService){

  }

  editUsername(student: Student, name: string): string{
    this.selectedStudent=student;
    student.username=name;
    return student.username;
  }
}
