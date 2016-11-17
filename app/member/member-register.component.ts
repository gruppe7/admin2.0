import { Component } from '@angular/core';

import { MemberService, Member } from './index';

@Component({
  selector: 'member-register',
  templateUrl: '/app/member/member-register.component.html'
})
export class MemberRegisterComponent{

  
  username: string;
  year: number;
  receipt: number;
  message ="";
  loading=false;

  constructor(private memberService: MemberService){

  }

  onSubmit(){
    this.loading=true;
    this.memberService.registerMember(this.username, this.year, this.receipt)
      .subscribe(
          res => {
            this.loading = false;
            this.message = "Du er registrert! En av våre ansatte vil verifisere innmeldingen"
          },
          error => {
            this.loading = false;
            this.message = "Noe gikk galt ... " + error;
          }
      )
  }
}
