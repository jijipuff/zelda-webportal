import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';

import { BursaryDetailsComponent } from './components/bursary-details/bursary-details.component';
import { EditBursaryComponent } from './components/edit-bursary/edit-bursary.component';
import { AddBursaryComponent } from './components/add-bursary/add-bursary.component';
import { BursariesComponent } from './components/bursaries/bursaries.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bursaries', component: BursariesComponent, canActivate: [AuthGuard]},
  { path: 'bursary/add', component: AddBursaryComponent, canActivate: [AuthGuard] },
  { path: 'bursary/:id', component: BursaryDetailsComponent, canActivate: [AuthGuard] },
  { path: 'bursary/edit/:id', component: EditBursaryComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard
  ],
  declarations: []
})
export class AppRoutingModule { }
