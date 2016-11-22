import { Component, OnInit } from '@angular/core';

import { MemberService, Member } from './index';

@Component({
  selector: 'member-list',
  templateUrl: 'app/member/member-list.component.html'
})
export class MemberListComponent implements OnInit{
  members: Member[];
  selectedMember : Member;
  selected = false;
  message = "";
  loading=false;

  constructor(private memberService: MemberService){

  }

  ngOnInit(){
    this.loading=true;
    this.memberService.getMembers()
      .subscribe(
        res =>{
          this.members = res;
          console.log(res);
          this.loading=false;
        },
        error =>{
          this.message = error;
          this.loading=false;
        }
      )
  }

  onSelect(member: Member){
    this.selectedMember = member;
    this.selected = true;
  }

  confirmMember(){
    this.loading=true;
    this.memberService.confirmMember(this.selectedMember)
      .subscribe(
        res=> {
          this.message = "Medlem bekreftet";
          this.loading=false;
        },
        error=> {
          this.message = error;
          this.loading=false;
        }
      );
  }

  deleteMember(){
    this.loading=true;
    this.memberService.deleteMember(this.selectedMember)
      .subscribe(
        res=> {
          this.message = "medlem slettet";
          this.loading=false;
        },
        error=>{
          this.message = error;
          this.loading=false;
        }
      );
  }

}
