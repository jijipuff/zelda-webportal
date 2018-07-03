import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BursariesComponent } from './components/bursaries/bursaries.component';
import { AddBursaryComponent } from './components/add-bursary/add-bursary.component';
import { EditBursaryComponent } from './components/edit-bursary/edit-bursary.component';
import { BursaryDetailsComponent } from './components/bursary-details/bursary-details.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BursaryService } from './services/bursary.service';
import { AuthService } from './services/auth.service';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    BursariesComponent,
    AddBursaryComponent,
    EditBursaryComponent,
    BursaryDetailsComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'zeldatestapp'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    BursaryService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
