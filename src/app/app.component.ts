import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './service/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
    showMenu: boolean = false;
    subscription: Subscription;

    ngOnInit(): void {}

    constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage().subscribe(message => { 
        this.showMenu = message.value; 
        console.log(message.value);
      });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
        alert("Se destruyo app compinent");
    }
  
}
