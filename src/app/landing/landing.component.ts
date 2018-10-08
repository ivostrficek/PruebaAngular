import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/index';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private menssageService: MessageService) { }

  ngOnInit() {
    //Si llego hasta aca es por que esta logueado
    //this.menssageService.sendMessage(true);
  }

}
