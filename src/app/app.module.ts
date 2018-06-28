import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BursaryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'zeldatestapp'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    BursaryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
