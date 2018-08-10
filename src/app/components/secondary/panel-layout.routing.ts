import { Routes } from '@angular/router';

import { EditBursaryComponent } from './components/edit-bursary/edit-bursary.component';
import { AddBursaryComponent } from './components/add-bursary/add-bursary.component';
import { BursariesComponent } from './components/bursaries/bursaries.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { SearchComponent } from './components/search/search.component';
import { DeleteBursaryComponent } from './components/delete-bursary/delete-bursary.component';
import { PreviewBursaryComponent } from './components/preview-bursary/preview-bursary.component';

export const PanelLayoutRoutes: Routes = [
    { path: '#', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'bursaries', component: BursariesComponent },
    { path: 'bursary/add', component: AddBursaryComponent },
    { path: 'bursary/delete/:id', component: DeleteBursaryComponent},
    { path: 'bursary/edit/:id', component: EditBursaryComponent },
    { path: 'bursary/:id', component: PreviewBursaryComponent },
    { path: 'applicants', component: ApplicantsComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'messaging', component: MessagingComponent },
    { path: 'search', component: SearchComponent}
];
