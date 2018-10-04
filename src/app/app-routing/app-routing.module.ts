import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { LoginComponent } from '../login/login.component';

const appRoutes: Routes = [
  {
    path:'#',
    component:LoginComponent
  },
  {
    path:'',
    component:LoginComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    CommonModule
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
