import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/primary/login/login.component';
import { NotFoundComponent } from './components/primary/not-found/not-found.component';
import { RegisterComponent } from './components/primary/register/register.component';
import { PanelLayoutComponent } from './components/secondary/panel-layout.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PanelLayoutComponent,
    children: [{
      path: '',
      loadChildren: './components/secondary/panel-layout.module#PanelLayoutModule'
    }],
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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
