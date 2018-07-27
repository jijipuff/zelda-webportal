import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { PanelLayoutRoutes } from './panel-layout.routing';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { BursaryDetailsComponent } from './components/bursary-details/bursary-details.component';
import { EditBursaryComponent } from './components/edit-bursary/edit-bursary.component';
import { AddBursaryComponent } from './components/add-bursary/add-bursary.component';
import { BursariesComponent } from './components/bursaries/bursaries.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports: [
    RouterModule.forChild(PanelLayoutRoutes),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AngularMultiSelectModule,
    CKEditorModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    BursaryDetailsComponent,
    EditBursaryComponent,
    AddBursaryComponent,
    BursariesComponent,
    DashboardComponent,
    ApplicantsComponent,
    ProfileComponent
  ]
})
export class PanelLayoutModule { }
