/*
**  Author: Elias Sundby Aukan
**  This is the login view with username/password input.
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthenticationService } from './index';

@Component({
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                res => {
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
