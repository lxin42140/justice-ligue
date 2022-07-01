import { Injectable } from '@angular/core';
import { LawAreaEnum } from '../models/enums/law-area.enum'; 
import { LegalIssueEnum } from '../models/enums/legal-issue.enum';

@Injectable({
  providedIn: 'root'
})
export class LawyersService {

  allLawyers: any[] = []; //change to lawyer object when pushed

  constructor() {
    this.allLawyers = [{
      firstName: 'John',
      lastName: 'Smith',
      email: 'johnsmith@gmail.com',
      yearsOfExperience: 10,
      experiencedSubjectMatters: [{
        subjectName: LawAreaEnum.CRIMINAL,
        subjectDescription: '',
        lawSubjectMatterExamples: [{
          exampleName: LegalIssueEnum.DRUG_OFFENCES,
          exampleDescription: ''
        }]
      }],
      experiencedExamples: [{
        exampleName: LegalIssueEnum.DRUG_OFFENCES,
        exampleDescription: ''
      }]
    }]
  }
}
