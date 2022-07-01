import { Lawyer } from './Lawyer';
import { LegalServiceBudget } from './LegalServiceBudget';
import { LegalIssue } from './LegalIssue';
import { LawArea } from './LawArea';

export class CaseInformationTemplate {
    requiredFields: Map<string, string>;
    lawAreas: LawArea[];
    legalIssues: LegalIssue[];
    requiredDocumentTemplates: Document[];
    createdByLawyer: Lawyer;
    estimatedBudget: LegalServiceBudget;

    constructor(
        requiredFields: Map<string, string>,
        lawAreas: LawArea[],
        legalIssues: LegalIssue[],
        requiredDocumentTemplates: Document[],
        createdByLawyer: Lawyer,
        estimatedBudget: LegalServiceBudget
    ) {
        this.requiredFields = requiredFields;
        this.lawAreas = lawAreas;
        this.legalIssues = legalIssues;
        this.requiredDocumentTemplates = requiredDocumentTemplates;
        this.createdByLawyer = createdByLawyer;
        this.estimatedBudget = estimatedBudget;
    }
}