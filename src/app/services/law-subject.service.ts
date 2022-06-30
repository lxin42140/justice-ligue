import { Injectable } from '@angular/core';
import { LawSubjectMatterEnum } from '../models/enums/law-subject-matter.enum';
import { LawSubjectMatterExampleEnum } from '../models/enums/law-subject-matter-example.enum';
import { LawSubjectMatter } from '../models/lawSubjectMatter';

@Injectable({
  providedIn: 'root'
})
export class LawSubjectService {

  lawSubjects: LawSubjectMatter[] = [];
  legalServiceCategories: string[] = []; //change when model has been created

  constructor() {
    this.lawSubjects = [{
      subjectName: LawSubjectMatterEnum.CIVIL,
      subjectDescription: '',
      lawSubjectMatterExamples: [
        {
          exampleName: LawSubjectMatterExampleEnum.SMALL_CLAIMS,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.EMPLOYMENT_CLAIMS,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.NEIGHBOUR_DISPUTES,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.BANKRUPTCY,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.BREACH_OF_CONTRACT,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.COMMERCIAL,
          exampleDescription: ''
        },
      ]
    },
    {
      subjectName: LawSubjectMatterEnum.CRIMINAL,
      subjectDescription: '',
      lawSubjectMatterExamples: [
        {
          exampleName: LawSubjectMatterExampleEnum.HOMICIDE,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.DRUG_OFFENCES,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.SEXUAL_OFFENCES,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.CHEATING,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.TRAFFIC_OR_REGULATORY,
          exampleDescription: ''
        }
      ]
    },
    {
      subjectName: LawSubjectMatterEnum.FAMILY,
      subjectDescription: '',
      lawSubjectMatterExamples: [
        {
          exampleName: LawSubjectMatterExampleEnum.DIVORCE,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.FAMILY_VIOLENCE,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.PROBATE_AND_ADMIN,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.MAINTENANCE,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.ADOPTION,
          exampleDescription: ''
        },
        {
          exampleName: LawSubjectMatterExampleEnum.CHILD_PROTECTION,
          exampleDescription: ''
        },
      ]
    }]

    this.legalServiceCategories = ['Consultation', 'Mediation', 'Arbitration', 'Preparation', 'Representation']
  }
}
