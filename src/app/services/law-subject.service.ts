import { Injectable } from '@angular/core';
import { LawAreaEnum } from '../models/enums/law-area.enum';
import { LegalIssueEnum } from '../models/enums/legal-issue.enum';
import { LawArea } from '../models/LawArea';
import { LegalService } from '../models/LegalService';
import { LegalServiceEnum } from '../models/enums/LegalService.enum';

@Injectable({
  providedIn: 'root'
})
export class LawSubjectService {

  lawSubjects: LawArea[] = [];
  legalServiceCategories: LegalService[] = []; //change when model has been created

  constructor() {
    this.lawSubjects = [{
      areaName: LawAreaEnum.CIVIL,
      areaDescription: '',
      associatedLegalIssues: [
        {
          issueName: LegalIssueEnum.SMALL_CLAIMS,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.CIVIL,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.EMPLOYMENT_CLAIMS,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.CIVIL,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.NEIGHBOUR_DISPUTES,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.CIVIL,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.BANKRUPTCY,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.CIVIL,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.BREACH_OF_CONTRACT,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.CIVIL,
          //   areaDescription: ''
          // }]
        },
        {
          issueName: LegalIssueEnum.COMMERCIAL,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.CIVIL,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
      ]
    },
    {
      areaName: LawAreaEnum.CRIMINAL,
      areaDescription: '',
      associatedLegalIssues: [
        {
          issueName: LegalIssueEnum.HOMICIDE,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.CRIMINAL,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.DRUG_OFFENCES,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.CRIMINAL,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.SEXUAL_OFFENCES,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.CRIMINAL,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.CHEATING,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.CRIMINAL,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.TRAFFIC_OR_REGULATORY,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.CRIMINAL,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        }
      ]
    },
    {
      areaName: LawAreaEnum.FAMILY,
      areaDescription: '',
      associatedLegalIssues: [
        {
          issueName: LegalIssueEnum.DIVORCE,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.FAMILY,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.FAMILY_VIOLENCE,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.FAMILY,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.PROBATE_AND_ADMIN,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.FAMILY,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.MAINTENANCE,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.FAMILY,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.ADOPTION,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.FAMILY,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
        {
          issueName: LegalIssueEnum.CHILD_PROTECTION,
          issueDescription: '',
          // associatedLegalArea: [{
          //   areaName: LawAreaEnum.FAMILY,
          //   areaDescription: '',
          //   associatedLegalIssues: []
          // }]
        },
      ]
    }]
    this.legalServiceCategories = Object.entries(LegalServiceEnum)
      .map(([key, value]) => ({ serviceName: value, serviceDescription: '' }));
  }
}
