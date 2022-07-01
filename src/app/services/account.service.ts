import { Injectable } from '@angular/core';
import { Client } from '../models/Client';
import { LawAreaEnum } from '../models/enums/law-area.enum';
import { LegalIssueEnum } from '../models/enums/legal-issue.enum';
import { Lawyer } from '../models/Lawyer';

type NewType = Lawyer;

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  isClient: boolean;
  lawyer: NewType;
  client: Client;

  constructor() { 
    this.isClient = true;
    this.lawyer = {
      firstName: 'John',
      lastName: 'Smith',
      email: 'johnsmith@gmail.com',
      yearsOfExperience: 10,
      practiceAreas: [{
        areaName: LawAreaEnum.CRIMINAL,
        areaDescription: '',
        associatedLegalIssues: [{
          issueName: LegalIssueEnum.DRUG_OFFENCES,
          issueDescription: '',
          associatedLegalArea: [{
            areaName: LawAreaEnum.CRIMINAL,
            areaDescription: '',
            associatedLegalIssues: []
          }]
        }]
      }],
      experiencedIssues: [{
        issueName: LegalIssueEnum.DRUG_OFFENCES,
        issueDescription: '',
        associatedLegalArea: [{
          areaName: LawAreaEnum.CRIMINAL,
          areaDescription: '',
          associatedLegalIssues: []
        }]
      }],
      caseTemplates: [],
      budgets: [],
      cases: [],
      scheduledMeetings: []
    }
    this.client = {
      firstName: 'Adam',
      lastName: 'Pie',
      email: 'johnsmith@gmail.com',
      cases: [],
      scheduledMeetings: []
    }
  }

  public switchUser(): void {
    this.isClient = !this.isClient;
  }
  
}
