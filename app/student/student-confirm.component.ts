import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { StudentService } from './index';

@Component({
  selector: 'student-register',
  template: "<div>vent litt</div>"
})
export class StudentConfirmComponent implements OnInit{
  token:string;
  username:string;
  subscription:Subscription;
  message:string ="";
  constructor(private studentService: StudentService,  private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.subscription = this.route.queryParams.subscribe(
      (param: any) => {
        this.username = param['username'];
        this.token= param['token'];
      });

    this.studentService.confirmStudent(this.token, this.username)
      .subscribe(
        res=>{
          this.router.navigate(['/dashboard']);
        },
        error =>{

          console.log(error);
        }
      )
  }
}
