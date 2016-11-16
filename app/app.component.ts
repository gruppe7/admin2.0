/*
**  Author: Elias Dunby Aukan, Henrik Bjørkheim.
**  This class is the main component. This is where we display the component given by the router.
**
*/

import { Component, OnInit } from '@angular/core';







@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'

})
export class AppComponent implements OnInit{
  title = 'ADMIN 2.0';
  login: boolean;
  constructor(){

  }

  ngOnInit(){
    if(localStorage.getItem('currentUser') !== null ){
      this.login = true;
    }else{
      this.login = false;
    }
  }



}
