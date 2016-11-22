import { Component, OnInit } from '@angular/core';

import { MemberService, Member } from './index';

@Component({
  selector: 'member-list',
  templateUrl: 'app/member/member-list.component.html'
})
export class MemberListComponent implements OnInit{
  members: Member[];
  selectedMember : Member;
  message = "";

  constructor(private memberService: MemberService){

  }

  ngOnInit(){
    this.memberService.getMembers()
      .subscribe(
        res =>{
          this.members = res;
        },
        error =>{
          this.message = error;
        }
      )
  }

}
