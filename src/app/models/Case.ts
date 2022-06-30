import { LegalAdvice } from './LegalAdvice';
import { LegalService } from './LegalService';
import { LegalIssue } from './LegalIssue';
import { LawArea } from './LawArea';
import { Lawyer } from './Lawyer';
import { Client } from './Client';

export class Case {
    caseTitle: string;
    caseDescription: String;
    caseStatus: string;
    caseFields: Map<String, String>;
    client: Client;
    lawyer: Lawyer;
    associatedLawAreas: LawArea[];
    associatedLegalIssues: LegalIssue[];
    requiredLegalServices: LegalService[];
    documents: Document[];
    providedLegalAdvices: LegalAdvice[];

    constructor(
        caseTitle: string,
        caseDescription: String,
        caseStatus: string,
        caseFields: Map<String, String>,
        client: Client,
        lawyer: Lawyer,
        associatedLawAreas: LawArea[],
        associatedLegalIssues: LegalIssue[],
        requiredLegalServices: LegalService[],
        documents: Document[],
        providedLegalAdvices: LegalAdvice[]
    ) {
        this.caseTitle = caseTitle;
        this.caseDescription = caseDescription;
        this.caseStatus = caseStatus;
        this.caseFields = caseFields;
        this.client = client;
        this.lawyer = lawyer;
        this.associatedLawAreas = associatedLawAreas;
        this.associatedLegalIssues = associatedLegalIssues;
        this.requiredLegalServices = requiredLegalServices;
        this.documents = documents;
        this.providedLegalAdvices = providedLegalAdvices;
    }
}