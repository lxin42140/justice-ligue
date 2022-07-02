import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

// import { HomeComponent } from './user-client/home/home.component';
import { HomeComponent } from './shared/home/home.component';
import { OptionComponent } from './components/option/option.component';
import { ViewConsultationsComponent } from './user-client/view-consultations/view-consultations.component';
import { MatchingLawyerComponent } from './user-client/matching-lawyer/matching-lawyer.component';
import { AllLawyersComponent } from './user-client/all-lawyers/all-lawyers.component';
import { LawyerCardComponent } from './components/cards/lawyer-card/lawyer-card.component';
import { LawyerModalComponent } from './components/modal/lawyer-modal/lawyer-modal.component';
import { ViewAppointmentsComponent } from './user-lawyer/view-appointments/view-appointments.component';
import { CaseDetailComponent } from './shared/case-detail/case-detail.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionComponent,
    ViewConsultationsComponent,
    MatchingLawyerComponent,
    AllLawyersComponent,
    LawyerCardComponent,
    LawyerModalComponent,
    ViewAppointmentsComponent,
    CaseDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatChipsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
