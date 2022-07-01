import { Lawyer } from "./Lawyer";
import { Case } from "./Case";

export class Meeting {
  startDateTime: Date
  endDateTime: Date
  requestedCases: Case[]
  acceptedCase: Case
  lawyer: Lawyer

  constructor(
    startDateTime: Date,
    endDateTime: Date,
    requestedCases: Case[],
    acceptedCase: Case,
    lawyer: Lawyer,
  ) {
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
    this.requestedCases = requestedCases;
    this.acceptedCase = acceptedCase;
    this.lawyer = lawyer;
  }
}