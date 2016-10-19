/*
**  Author: Elias Sundby Aukan
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Component({
  selector: 'login',
  template: `
    <div id=login>

        <p>Brukernavn</p>
        <input [(ngModel)]="username" type="text" id="username" name="username"><br>
        <p>Passord:</p>
        <input [(ngModel)]="password" type="password" id="password" name="password"> <br>
          <button (click)="onSubmit()" type="submit">Logg inn</button>

    </div>
    <div *ngIf="login">Logget inn som {{username}}</div>
    <div *ngIf="!login">Ikke logget inn</div>
      `
})
export class LoginComponent{
  username: string;
  password: string;
  login = false;
  error = false;
  constructor(private userService: UserService, private router: Router){}

  onSubmit(): void{
    if(this.userService.login_mock(this.username, this.password)){
      this.login = true;
      this.router.navigate(['']);
    }


  }
}
