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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bursary/add', component: AddBursaryComponent },
  { path: 'bursary/:id', component: BursaryDetailsComponent },
  { path: 'bursary/edit/:id', component: EditBursaryComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
