import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, CheckAuth } from './shared/guards/auth.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[

  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  }, 
  {path:'', loadChildren: ()=>import('./modules/landing/landing.module').then(module => module.LandingModule), canActivate: [CheckAuth]},
  {path:'sign-in', loadChildren: ()=>import('./modules/auth/auth.module').then(module => module.AuthModule), canActivate: [CheckAuth]},
  {path:'admin', loadChildren: ()=>import('./modules/admin/admin.module').then(module => module.AdminModule), canActivate: [AuthGuard]},
  
  

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
