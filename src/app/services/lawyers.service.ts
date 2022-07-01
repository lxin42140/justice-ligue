import { Injectable } from '@angular/core';
import { LawAreaEnum } from '../models/enums/law-area.enum';
import { LegalIssueEnum } from '../models/enums/legal-issue.enum';
import { Lawyer } from '../models/Lawyer';

@Injectable({
  providedIn: 'root'
})
export class LawyersService {

  allLawyers: Lawyer[] = [];

  constructor() {
    this.allLawyers = [{
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
    }]
  }
}
