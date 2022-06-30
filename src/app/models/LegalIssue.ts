import { LawArea } from './LawArea';

export class LegalIssue {
    issueName: string;
    issueDescription: string;
    associatedLegalArea: LawArea[];

    constructor(
        issueName: string,
        issueDescription: string,
        associatedLegalArea: LawArea[]
    ) {
        this.issueDescription = issueDescription;
        this.issueName = issueName;
        this.associatedLegalArea = associatedLegalArea;
    }
}