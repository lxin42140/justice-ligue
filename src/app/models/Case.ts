import { LegalAdvice } from './LegalAdvice';
import { LegalService } from './LegalService';
import { LegalIssue } from './LegalIssue';
import { LawArea } from './LawArea';
import { Lawyer } from './Lawyer';
import { Client } from './Client';
import { Meeting } from './Meeting';


export class Case {
    caseTitle: string
    caseDescription: String
    clientRemarks: string
    lawyerRemarks: string
    caseStatus: string
    caseFields: Map<string, string>
    client: Client
    lawyer: Lawyer | undefined
    meetings: Meeting[]
    associatedLawAreas: LawArea[]
    associatedLegalIssues: LegalIssue[]
    requiredLegalServices: LegalService[]
    documents: Document[]
    providedLegalAdvices: LegalAdvice[]

    constructor(
        caseTitle: string,
        caseDescription: String,
        clientRemarks: string,
        lawyerRemarks: string,
        caseStatus: string,
        caseFields: Map<string, string>,
        client: Client,
        lawyer: Lawyer,
        meetings: Meeting[],
        associatedLawAreas: LawArea[],
        associatedLegalIssues: LegalIssue[],
        requiredLegalServices: LegalService[],
        documents: Document[],
        providedLegalAdvices: LegalAdvice[],
    ) {
        this.caseTitle = caseTitle;
        this.caseDescription = caseDescription;
        this.clientRemarks = clientRemarks;
        this.lawyerRemarks = lawyerRemarks;
        this.caseStatus = caseStatus;
        this.caseFields = caseFields;
        this.client = client;
        this.lawyer = lawyer;
        this.meetings = meetings;
        this.associatedLawAreas = associatedLawAreas;
        this.associatedLegalIssues = associatedLegalIssues;
        this.requiredLegalServices = requiredLegalServices;
        this.documents = documents;
        this.providedLegalAdvices = providedLegalAdvices;
    }
}