import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'justice-ligue';
  events: string[] = [];
  opened: boolean = false;
}

// case created when selecting options. user choose timeslot, fill in template -> use the values to update case
// meeting created with selected lawyer

// client can only choose one timeslot per case; have a confirmation; then go to their list of cases; other ppl cannot book

// clients can view case details, lawyers, chats
// lawyer can reassign cases only after first meeting. use endtime to track.

// clients can upate documents
// lawyers can edit caseFields

//case details page should show the client and lawyer remarks too


// lawyers can view calendar -> see which slots are being booked -> click in to view case details (should be same component as client), can edit all details
// lawyers can view all their cases
// reassignment after first meeting