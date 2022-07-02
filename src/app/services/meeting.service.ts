import { DummyCase1, DummyCase2, DummyClient, DummyLawyer } from './../data/data';
import { Meeting } from './../models/Meeting';
import { Injectable } from '@angular/core';
import moment from 'moment';


const startDate1 = moment().toDate();
startDate1.setHours(9);
startDate1.setMinutes(0);
startDate1.setSeconds(0);
startDate1.setMilliseconds(0);


const startDate2 = moment().toDate();
startDate1.setHours(11);
startDate1.setMinutes(0);
startDate1.setSeconds(0);
startDate1.setMilliseconds(0);


@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  meetings: Meeting[];

  constructor() { 
    this.meetings = [
      {
        startDateTime: startDate1,
        endDateTime: moment(startDate1).add(30, 'minutes').toDate(),
        associatedCase: DummyCase1,
        lawyer: DummyLawyer
      },
      {
        startDateTime: startDate2,
        endDateTime: moment(startDate2).add(30, 'minutes').toDate(),
        associatedCase: DummyCase2,
        lawyer: DummyLawyer
      }
    ]
  }
}
