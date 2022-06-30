import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card'
import { HomeComponent } from './user-client/home/home.component';
import { OptionComponent } from './components/option/option.component';
import { ViewConsultationsComponent } from './user-client/view-consultations/view-consultations.component';
import { MatchingLawyerComponent } from './user-client/matching-lawyer/matching-lawyer.component';
import { AllLawyersComponent } from './user-client/all-lawyers/all-lawyers.component';
import { LawyerCardComponent } from './components/cards/lawyer-card/lawyer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionComponent,
    ViewConsultationsComponent,
    MatchingLawyerComponent,
    AllLawyersComponent,
    LawyerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
