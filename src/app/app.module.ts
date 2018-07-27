import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/primary/login/login.component';
import { RegisterComponent } from './components/primary/register/register.component';
import { NotFoundComponent } from './components/primary/not-found/not-found.component';
import { TopNavbarComponent } from './components/primary/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './components/primary/side-navbar/side-navbar.component';
import { PanelLayoutComponent } from './components/secondary/panel-layout.component';

import { ClientAdminService } from './services/client-admin.service';
import { BursaryService } from './services/bursary.service';
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { ApplicantService } from './services/applicants.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    PanelLayoutComponent
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'zeldav1-dev'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    ClientAdminService,
    BursaryService,
    ClientService,
    AuthService,
    ApplicantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
