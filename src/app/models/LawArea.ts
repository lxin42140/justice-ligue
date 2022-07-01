import { LegalIssue } from './LegalIssue';

export class LawArea {
    areaName: string;
    areaDescription: string;
    associatedLegalIssues: LegalIssue[];

    constructor(
        areaName: string,
        areaDescription: string,
        associatedLegalIssues: LegalIssue[]
    ) {
        this.areaName = areaName;
        this.areaDescription = areaDescription;
        this.associatedLegalIssues = associatedLegalIssues;
    }
}