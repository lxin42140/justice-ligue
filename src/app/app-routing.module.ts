import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user-client/home/home.component';
import { MatchingLawyerComponent } from './user-client/matching-lawyer/matching-lawyer.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
