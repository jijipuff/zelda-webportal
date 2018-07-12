import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { PanelLayoutRoutes } from './panel-layout.routing';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { BursaryDetailsComponent } from '../../components/bursary-details/bursary-details.component';
import { EditBursaryComponent } from '../../components/edit-bursary/edit-bursary.component';
import { AddBursaryComponent } from '../../components/add-bursary/add-bursary.component';
import { BursariesComponent } from '../../components/bursaries/bursaries.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild(PanelLayoutRoutes),
    AngularDateTimePickerModule,
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
    DashboardComponent
  ]
})
export class PanelLayoutModule { }
