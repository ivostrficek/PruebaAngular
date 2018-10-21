import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService, AlertService, AuthenticationService, MessageService, PaisService, UserService, HelperTypeService } from './service';
import { GridComponent } from './commons/grid/grid.component';
import { DataTablesModule } from 'angular-datatables';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule }   from '@angular/forms';
import { AppConfig } from './app.config';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './user/user.component';
import { AdminorganismComponent } from './adminorganism/adminorganism.component';
import { OrganismsService } from './service/organisms.service';
import { RegionComponent } from './region/region.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GridComponent,
    LoginComponent,
    LandingComponent,
    UserComponent,
    UserComponent,
    AdminorganismComponent,
    RegionComponent
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
    UserService,
    HelperTypeService,
    OrganismsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
