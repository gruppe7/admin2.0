/*
**  Author: Elias Sundby Aukan
*/

import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  template: `
    <div id=login>

        <p>Brukernavn</p>
        <input [(ngModel)]="this.username" type="text" id="username" name="username"><br>
        <p>Passord:</p>
        <input [(ngModel)]="this.password" type="password" id="password" name="password"> <br>
        <button (click)="checkLogin()" type="submit">Logg inn</button>

    </div>
    <div *ngIf="login">Logget inn</div>
    <div *ngIf="!login">Ikke logget inn</div>
      `
})
export class LoginComponent{
  username: string;
  password: string;
  login = false;
  constructor(private loginService: LoginService){}

  checkLogin(): void{
    this.login = this.loginService.checkLoginTest(this.username, this.password);
  }
}