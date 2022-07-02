import { Injectable } from '@angular/core';
import { Case } from '../models/Case';
import { LawAreaEnum } from '../models/enums/law-area.enum';
import { LegalIssueEnum } from '../models/enums/legal-issue.enum';
import { Lawyer } from '../models/Lawyer';
import { LegalServiceBudget } from '../models/LegalServiceBudget';
import { User } from '../models/User';

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

    const requiredFields = new Map<string, string>();
    requiredFields.set('What is your age?', '');
    requiredFields.set('What is your budget?', '');

    const requiredDocuments = [{
      documentName: 'Marriage Certificate',
      documentDescription: '',
      documentURL: '',
      isSensitive: false,
      submittedUser: {} as unknown as User,
      associatedCase: {} as unknown as Case,
    }]

    const caseInformationTemplates = [{
      requiredFields: requiredFields,
      lawAreas: [{
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
      legalIssues: [{
        issueName: LegalIssueEnum.DRUG_OFFENCES,
        issueDescription: '',
        associatedLegalArea: [{
          areaName: LawAreaEnum.CRIMINAL,
          areaDescription: '',
          associatedLegalIssues: []
        }]
      }],
      requiredDocumentTemplates: requiredDocuments,
      createdByLawyer: this.allLawyers[0],
      estimatedBudget: undefined as unknown as LegalServiceBudget,
    }];
    this.allLawyers = this.allLawyers.map(lawyer => { return { ...lawyer, caseTemplates: caseInformationTemplates } });
  }
}
