import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user-client/home/home.component';
import { MatchingLawyerComponent } from './user-client/matching-lawyer/matching-lawyer.component';
import { AllLawyersComponent } from './user-client/all-lawyers/all-lawyers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client/home',
    pathMatch: 'full',
  },
  {
    path: 'client/home',
    component: HomeComponent
  },
  {
    path: 'client/matching',
    component: MatchingLawyerComponent
  },
  {
    path: 'client/all-lawyers/:subject/:example/:service',
    component: AllLawyersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
