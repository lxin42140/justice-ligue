import { AccountService } from './../../services/account.service';
import { MeetingService } from './../../services/meeting.service';
import { Component, Inject, OnInit } from '@angular/core';
import moment from 'moment';
import { Lawyer } from 'src/app/models/Lawyer';
import { Meeting } from 'src/app/models/Meeting';
import { Case } from 'src/app/models/Case';

export interface LawyerDialogData {
  viewProfile: boolean; //viewing profile or booking slots
  lawyer: Lawyer;
}

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.scss']
})
export class ViewAppointmentsComponent implements OnInit {

  meetings: Meeting[];
  meetingMap: Map<string, Meeting[]>;
  lawyer: Lawyer;
  selectedCase: Case | undefined;

  constructor(
    private meetingService: MeetingService,
    private accountService: AccountService
  ) {
    this.lawyer = this.accountService.lawyer;
    this.meetings = this.meetingService.meetings;
    this.meetingMap = new Map<string, Meeting[]>();
  }

  ngOnInit(): void {
    this.meetings.forEach(meeting => {
      const meetingDate = moment(meeting.startDateTime).format('YYYY-MM-DD');
      if (!this.meetingMap.get(meetingDate)) {
        this.meetingMap.set(meetingDate, [meeting]);
      } else {
        const meetings = this.meetingMap.get(meetingDate);
        meetings?.push(meeting);
      }
    })
  }

  displayCaseDetails(selectedCase: Case) {
    this.selectedCase = selectedCase;
  }

}