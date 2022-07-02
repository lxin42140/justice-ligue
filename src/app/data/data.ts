import { LegalIssue } from 'src/app/models/LegalIssue';
import { LegalServiceEnum } from './../models/enums/LegalService.enum';
import { Meeting } from './../models/Meeting';
import { CaseStatusEnum } from './../models/enums/CaseStatus.enum';
import { Case } from './../models/Case';
import { Lawyer } from 'src/app/models/Lawyer';
import { Client } from '../models/Client';
import { LawAreaEnum } from '../models/enums/law-area.enum';
import { LegalIssueEnum } from '../models/enums/legal-issue.enum';
import { LegalService } from '../models/LegalService';
import { User } from '../models/User';
import { Document } from '../models/Document';
import { LegalServiceBudget } from '../models/LegalServiceBudget';

export const DummyLawyer: Lawyer = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'johnsmith@gmail.com',
    id: (Math.random() + 1).toString(36).substring(7),
    yearsOfExperience: 10,
    practiceAreas: [{
        areaName: LawAreaEnum.CRIMINAL,
        areaDescription: '',
        associatedLegalIssues: [{
            issueName: LegalIssueEnum.DRUG_OFFENCES,
            issueDescription: ''
        }]
    }],
    experiencedIssues: [{
        issueName: LegalIssueEnum.DRUG_OFFENCES,
        issueDescription: '',
    }],
    caseTemplates: [],
    budgets: [],
    cases: [],
    scheduledMeetings: []
}

const requiredFields = new Map<string, string>();
requiredFields.set('What is your age?', '');
requiredFields.set('What is your budget?', '');

const requiredDocuments = <Document[]>[{
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
        }]
    }],
    legalIssues: [{
        issueName: LegalIssueEnum.DRUG_OFFENCES,
        issueDescription: '',
    }],
    requiredDocumentTemplates: requiredDocuments,
    createdByLawyer: DummyLawyer,
    estimatedBudget: undefined as unknown as LegalServiceBudget,
}];

DummyLawyer.caseTemplates = caseInformationTemplates;

export const DummyClient: Client = {
    firstName: 'Adam',
    lastName: 'Pie',
    email: 'johnsmith@gmail.com',
    id: (Math.random() + 1).toString(36).substring(7),
    cases: [],
    scheduledMeetings: []
}

export const DummyLegalIssue1: LegalIssue = {
    issueName: LegalIssueEnum.DRUG_OFFENCES,
    issueDescription: '',
}

export const DummyLegalIssue2: LegalIssue = {
    issueName: LegalIssueEnum.DIVORCE,
    issueDescription: '',
}

export const DummyLegalService1: LegalService = {
    serviceName: LegalServiceEnum.CONSULTATION,
    serviceDescription: ''
}

export const DummyCase1: Case = {
    caseTitle: 'Divorce',
    caseDescription: 'Looking to divorce and get settlement',
    clientRemarks: '',
    lawyerRemarks: '',
    caseStatus: CaseStatusEnum.MEETING_BOOKED,
    caseFields: new Map<string, string>([
        ["Years of marriage", "5"],
        ["Number of kids", "5"],
        ["Abused", "true"],
    ]),
    client: DummyClient,
    lawyer: DummyLawyer,
    meetings: [

    ],
    associatedLawAreas: [
        {
            areaName: LawAreaEnum.FAMILY,
            areaDescription: '',
            associatedLegalIssues: [DummyLegalIssue2]
        }
    ],
    associatedLegalIssues: [DummyLegalIssue2],
    requiredLegalServices: [DummyLegalService1],
    documents: [
    ],
    providedLegalAdvices: [
    ]
}

export const DummyCase2: Case = {
    caseTitle: 'Drug abuse',
    caseDescription: 'Looking to go court for drug abuse',
    clientRemarks: '',
    lawyerRemarks: '',
    caseStatus: CaseStatusEnum.MEETING_BOOKED,
    caseFields: new Map<string, string>([
        ["Years of abuse", "5"],
        ["first time offense", "true"]
    ]),
    client: DummyClient,
    lawyer: DummyLawyer,
    meetings: [

    ],
    associatedLawAreas: [
        {
            areaName: LawAreaEnum.CRIMINAL,
            areaDescription: '',
            associatedLegalIssues: [DummyLegalIssue2]
        }
    ],
    associatedLegalIssues: [DummyLegalIssue2],
    requiredLegalServices: [DummyLegalService1],
    documents: [
    ],
    providedLegalAdvices: [
    ]
}