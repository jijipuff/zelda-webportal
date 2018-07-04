import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PanelLayoutRoutes } from './panel-layout.routing';

import { BursaryDetailsComponent } from '../../components/bursary-details/bursary-details.component';
import { EditBursaryComponent } from '../../components/edit-bursary/edit-bursary.component';
import { AddBursaryComponent } from '../../components/add-bursary/add-bursary.component';
import { BursariesComponent } from '../../components/bursaries/bursaries.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PanelLayoutRoutes)
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
