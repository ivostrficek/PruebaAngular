import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from '../service/index';
import { AlertService, AuthenticationService } from '../service/index';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private messageService: MessageService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        

        // get return url from route parameters or default to 'home'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.messageService.sendMessage(true);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.messageService.sendMessage(false);
                    this.alertService.error('Username or password is incorrect');
                    this.loading = false;
                });
    }
}
