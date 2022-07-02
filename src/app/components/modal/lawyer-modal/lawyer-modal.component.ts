import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lawyer } from 'src/app/models/Lawyer';
import { Document } from 'src/app/models/Document';

import moment from 'moment';
import { Case } from 'src/app/models/Case';
import { User } from 'src/app/models/User';

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

  showEditFormPage: boolean = false;
  requiredFields: Map<string, string> = new Map();
  requiredDocuments: Document[] = [];
  uploadedDocuments: File[] = [];

  constructor(
    public dialogRef: MatDialogRef<LawyerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LawyerDialogData,
  ) { }

  ngOnInit(): void {
    this.viewProfile = this.data.viewProfile
    this.requiredFields = this.data.lawyer.caseTemplates[0].requiredFields; //for now, take it as there is only one case template
    this.requiredDocuments = this.data.lawyer.caseTemplates[0].requiredDocumentTemplates; //for now, take it as there is only one case template
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
    this.showEditFormPage = true;
  }

  //this function is just to prevent the textarea from losing focus on every character input.
  //read here: https://stackoverflow.com/questions/42322968/angular2-dynamic-input-field-lose-focus-when-input-changes
  trackByFn(index: any, item: any) {
    return index;
  }

  updateFields(field: string, event: string) {
    this.requiredFields.set(field, event);
  }

  closeModal() {
    this.dialogRef.close();
  }

  onChange(index: number, event: any) {
    if (event.target.files[0]) {
      // this.uploadedDocuments[index] = <Document>{
      //   documentName: event.target.files[0].name,
      //   associatedCase: {} as unknown as Case,
      //   documentDescription: '',
      //   documentURL: '',
      //   isSensitive: false,
      //   submittedUser: {} as unknown as User,
      // }
      this.uploadedDocuments[index] = event.target.files[0];
    }
  }

  //not used for now. for actual file upload
  onUpload() {
    // this.loading = !this.loading;
    // console.log(this.file);
    // this.fileUploadService.upload(this.file).subscribe(
    //   (event: any) => {
    //     if (typeof (event) === 'object') {

    //       // Short link via api response
    //       this.shortLink = event.link;

    //       this.loading = false; // Flag variable 
    //     }
    //   }
    // );
    console.log('onUpload')
  }

  submit() {
    console.log('submit')
    //validate, submit.
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
