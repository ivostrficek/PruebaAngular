import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { LoginComponent } from '../login/login.component';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { AuthGuard } from '../guards/auth.guard';

const appRoutes: Routes = [
  { path:'', component:LandingComponent, canActivate: [AuthGuard]  },
  { path:'login', component:LoginComponent },
  { path:'**', redirectTo:'' }
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
