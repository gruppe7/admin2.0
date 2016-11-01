import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Student } from './student';




@Component({
  selector: 'students',
  template: 'app/student/student.component.html'
  providers: [StudentService]
})

export class StudentComponent{
  
}
