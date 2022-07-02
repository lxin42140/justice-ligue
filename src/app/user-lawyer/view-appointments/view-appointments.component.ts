import { AccountService } from './../../services/account.service';
import { MeetingService } from './../../services/meeting.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from 'moment';
import { Lawyer } from 'src/app/models/Lawyer';
import { Meeting } from 'src/app/models/Meeting';

export interface LawyerDialogData {
  viewProfile: boolean; //viewing profile or booking slots
  lawyer: Lawyer;
}

interface Timeslot {
  day: {
    date: number; //date
    dayOfWeek: number; //Sun -> 0; Mon -> 1 etc
  };
  time: {
    startTime: string; //in the format H:mm, 24 hour format
    endTime: string; //in the format H:mm, 24 hour format
    duration: string; //in the format xh ymin, where x and y are numbers > 0. for now, default is 30min.
  }
}

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.scss']
})
export class ViewAppointmentsComponent implements OnInit {

  timeslots: Map<number, Timeslot[]> = new Map<number, Timeslot[]>();
  selectedTimeslot: Timeslot | undefined;
  meetings: Meeting[];
  lawyer: Lawyer;

  constructor(
    private meetingService: MeetingService,
    private accountService: AccountService
  ) { 
    this.lawyer = this.accountService.lawyer;
    this.meetings = this.meetingService.meetings.filter(meeting => {
      meeting.lawyer.id = this.lawyer.id;
    });

    console.log(this.meetings);
  }

  ngOnInit(): void {
    this.initTimeslots();
  }

  checkTimeSlotIsBoooked(timeslot: Timeslot): boolean {
    return timeslot && this.meetings.filter(meeting => {
      const formattedDate = moment(meeting.startDateTime);

      return meeting.startDateTime.getDay() === timeslot.day.date && formattedDate.format('HH:mm') === timeslot.time.startTime
    }).length > 0;
  }

  private initTimeslots() {
    let DAYS_IN_ADVANCE = 10;
    //hardcoded timeslot per day
    const timeslotsPerDay = [
      { startTime: '9:00', endTime: '9:30', duration: '30min' },
      { startTime: '9:30', endTime: '10:00', duration: '30min' },
      { startTime: '10:00', endTime: '10:30', duration: '30min' },
      { startTime: '10:30', endTime: '11:00', duration: '30min' },
      { startTime: '11:00', endTime: '11:30', duration: '30min' },
      { startTime: '11:30', endTime: '12:00', duration: '30min' },
      { startTime: '14:00', endTime: '14:30', duration: '30min' },
      { startTime: '14:30', endTime: '15:00', duration: '30min' },
      { startTime: '15:00', endTime: '15:30', duration: '30min' },
      { startTime: '15:30', endTime: '16:00', duration: '30min' }
    ];

    for (let i = 0; i < DAYS_IN_ADVANCE; i++) {
      const date = moment().add(i, 'd');
      if (date.day() === 0 || date.day() === 6) { //for now, skip sat and sun
        DAYS_IN_ADVANCE++;
        continue;
      } else {
        this.timeslots.set(date.date(), timeslotsPerDay.map(x => {
          return {
            day: {
              date: date.date(),
              dayOfWeek: date.day()
            },
            time: x
          }
        }));
      }
    }
  }

}