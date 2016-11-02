import { Component } from '@angular/core';

import { Student, StudentComponent } from './index';


@Component({
  selector: 'student-register',
  templateUrl: 'app/student/student-register.component.html'
})

export class StudentRegisterComponent {
  model = new Student();
  constructor(){};

  sendEmail(){
  }


}
