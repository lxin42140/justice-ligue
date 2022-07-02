import { Lawyer } from "./Lawyer";
import { Case } from "./Case";

export class Meeting {
  startDateTime: Date
  endDateTime: Date
  associatedCase: Case
  lawyer: Lawyer

  constructor(
    startDateTime: Date,
    endDateTime: Date,
    associatedCase: Case,
    lawyer: Lawyer,
  ) {
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
    this.associatedCase = associatedCase;
    this.lawyer = lawyer;
  }
}