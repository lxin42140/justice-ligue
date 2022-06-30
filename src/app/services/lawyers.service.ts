import { Injectable } from '@angular/core';
import { LawSubjectMatterExampleEnum } from '../models/enums/law-subject-matter-example.enum';
import { LawSubjectMatterEnum } from '../models/enums/law-subject-matter.enum';
import { LawSubjectMatter } from '../models/lawSubjectMatter';
import { LawSubjectMatterExample } from '../models/lawSubjectMatterExample';

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
        subjectName: LawSubjectMatterEnum.CRIMINAL,
        subjectDescription: '',
        lawSubjectMatterExamples: [{
          exampleName: LawSubjectMatterExampleEnum.DRUG_OFFENCES,
          exampleDescription: ''
        }]
      }],
      experiencedExamples: [{
        exampleName: LawSubjectMatterExampleEnum.DRUG_OFFENCES,
        exampleDescription: ''
      }]
    }]
  }
}
