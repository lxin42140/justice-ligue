import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lawyer } from 'src/app/models/Lawyer';

import moment from 'moment';

export interface LawyerDialogData {
  viewProfile: boolean; //viewing profile or booking slots
  lawyer: Lawyer;
}

//just a temp object. in the future likely to shift this to its own service, with attributes such as occupied or not, lawyer's availability etc.
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
  selector: 'app-lawyer-modal',
  templateUrl: './lawyer-modal.component.html',
  styleUrls: ['./lawyer-modal.component.scss']
})
export class LawyerModalComponent implements OnInit {

  viewProfile: boolean = true;
  timeslots: Map<number, Timeslot[]> = new Map<number, Timeslot[]>();
  selectedTimeslot: Timeslot | undefined;

  constructor(
    public dialogRef: MatDialogRef<LawyerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LawyerDialogData,
  ) { }

  ngOnInit(): void {
    this.viewProfile = this.data.viewProfile

    this.initTimeslots();
  }

  viewTimeslots() {
    this.viewProfile = false;
  }

  selectTimeslot(date: number, startTime: string) {
    this.selectedTimeslot = this.timeslots.get(date)?.filter(timeslot => timeslot.time.startTime === startTime)[0];
  }

  checkTimeslotIsActive(timeslot: Timeslot): boolean {
    return (this.selectedTimeslot && this.selectedTimeslot.day.date === timeslot.day.date && this.selectedTimeslot.time.startTime === timeslot.time.startTime) ?? false;
  }

  updateCase() {
    //TODO: update the case with the timeslot
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

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
