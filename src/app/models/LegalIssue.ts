import { LawArea } from './LawArea';

export class LegalIssue {
    issueName: string;
    issueDescription: string;

    constructor(
        issueName: string,
        issueDescription: string
    ) {
        this.issueDescription = issueDescription;
        this.issueName = issueName;
    }
}