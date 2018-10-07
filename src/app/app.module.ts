import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './service/menu.service';
import { GridComponent } from './commons/grid/grid.component';
import { DataTablesModule } from 'angular-datatables';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AlertService } from './service/alert.service';
import { AuthenticationService } from './service/authentication.service';
import { FormsModule }   from '@angular/forms';
import { AppConfig } from './app.config';
import { MessageService } from './service/message.service';
import { AuthGuard } from './guards/auth.guard';
import { BasicService } from './service/basic.service';
import { PaisService } from './service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GridComponent,
    LoginComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MenuService,
    AlertService,
    AuthenticationService,
    MessageService,
    PaisService,
    AppConfig,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
