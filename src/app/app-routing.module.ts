import { ViewAppointmentsComponent } from './user-lawyer/view-appointments/view-appointments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { MatchingLawyerComponent } from './user-client/matching-lawyer/matching-lawyer.component';
import { AllLawyersComponent } from './user-client/all-lawyers/all-lawyers.component';
import { ViewAllCasesComponent } from './user-lawyer/view-all-cases/view-all-cases.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'client/matching',
    component: MatchingLawyerComponent
  },
  {
    path: 'client/all-lawyers/:subject/:example/:service',
    component: AllLawyersComponent
  },
  {
    path: 'lawyer/view-appointments',
    component: ViewAppointmentsComponent
  },
  {
    path: 'lawyer/view-all-cases',
    component: ViewAllCasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
