/*
**  Author: Elias Sundby Aukan
**  This is the login view with username/password input.
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {  LoginService } from './login.service';

@Component({
  moduleId : module.id,
  selector: 'login',
  template: `
    <div id=login>
        <p>Brukernavn</p>
        <input [(ngModel)]="model.username" #username="ngModel" required type="text" id="username" name="username"><br>
        <p>Passord:</p>
        <input [(ngModel)]="model.password" #password="ngModel" required type="password" id="password" name="password"> <br>
          <button (click)="onSubmit()" type="submit">Logg inn</button>

    </div>
    <div *ngIf="login">Logget inn som {{username}}</div>
    <div *ngIf="!login">Ikke logget inn</div>
      `
})
export class LoginComponent implements OnInit{
  model: any = {};
  loading = false;
  error = '';

  constructor(private loginService: LoginService, private router: Router ){ }

  ngOnInit(){
    this.loginService.logout(); //reset login status
  }

  logIn(){
    this.loading = true;
    this.loginService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if(result === true) {   //login succsessful
          this.router.navigate(['/']);
        } else {                //login failed
          this.error = 'Feil brukernavn eller passord';
          this.loading = false
        }
      });
  }


}
