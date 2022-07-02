import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timeslot } from '../components/modal/lawyer-modal/lawyer-modal.component';
import { Case } from '../models/Case';
import { CaseStatusEnum } from '../models/enums/CaseStatus.enum';
import { LawAreaEnum } from '../models/enums/law-area.enum';
import { LegalIssueEnum } from '../models/enums/legal-issue.enum';
import { LegalServiceEnum } from '../models/enums/LegalService.enum';
import { Lawyer } from '../models/Lawyer';
import { AccountService } from './account.service';
import { LawSubjectService } from './law-subject.service';

@Injectable({
  providedIn: 'root'
})

//CRUD of client schedules

export class ClientScheduleService {

  createdCase: Case | undefined;

  constructor(
    private db: AngularFirestore,
    private accountService: AccountService,
    private lawSubjectService: LawSubjectService,
  ) { }

  createCase(lawArea: LawAreaEnum, legalIssue: LegalIssueEnum, service: LegalServiceEnum) {
    const lawAreas = this.lawSubjectService.lawSubjects.filter(x => x.areaName === lawArea);
    this.createdCase = {
      caseTitle: '',
      caseDescription: '',
      clientRemarks: '',
      lawyerRemarks: '',
      caseStatus: CaseStatusEnum.PENDING,
      caseFields: new Map<string, string>(),
      client: this.accountService.client,
      lawyer: undefined,
      meetings: [],
      associatedLawAreas: lawAreas,
      associatedLegalIssues: lawAreas[0].associatedLegalIssues,
      requiredLegalServices: this.lawSubjectService.legalServiceCategories.filter(x => x.serviceName === service),
      documents: [],
      providedLegalAdvices: []
    }
  }

  //this is for 
  createCaseWithLawyer(lawyer: Lawyer, timeslot: Timeslot, requiredFields: Map<string, string>, requiredDocuments: File[]) {
    //upload each file using POST
    
    this.createdCase = {
      ...this.createdCase!,
      caseFields: requiredFields,
      documents: [], //to be updated with an array of Document object
      meetings: [{
        startDateTime: timeslot.time.startTimeDate,
        endDateTime: timeslot.time.endTimeDate,
        associatedCase: {} as unknown as Case,
        lawyer: lawyer,
      }]
    }
  }
}
