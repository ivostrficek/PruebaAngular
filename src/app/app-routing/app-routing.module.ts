import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../guards/auth.guard';
import { UserComponent } from '../user/user.component';
import { AdminorganismComponent } from '../adminorganism/adminorganism.component';
import { RegionComponent } from '../region/region.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/users', component: UserComponent },
  { path: 'admin/organisms', component: AdminorganismComponent },
  { path: 'admin/districts/regions', component: RegionComponent },  
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
