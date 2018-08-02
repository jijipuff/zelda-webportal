import { Routes } from '@angular/router';

import { BursaryDetailsComponent } from './components/bursary-details/bursary-details.component';
import { EditBursaryComponent } from './components/edit-bursary/edit-bursary.component';
import { AddBursaryComponent } from './components/add-bursary/add-bursary.component';
import { BursariesComponent } from './components/bursaries/bursaries.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagingComponent } from './components/messaging/messaging.component';

export const PanelLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'bursaries', component: BursariesComponent },
    { path: 'bursary/add', component: AddBursaryComponent },
    { path: 'bursary/:id', component: BursaryDetailsComponent },
    { path: 'bursary/edit/:id', component: EditBursaryComponent },
    { path: 'applicants', component: ApplicantsComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'applicants', component: ApplicantsComponent },
    { path: 'messaging', component: MessagingComponent },
];
