import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsersService } from '../users/users.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if(localStorage.getItem('auth_token')){
      return true;
    }
    this.router.navigate(['/login']);
  }
}
