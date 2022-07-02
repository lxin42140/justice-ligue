import { Case } from './Case';
import { User } from './User';

export class Document {
    documentName: string;
    documentDescription: string;
    documentURL: string;
    isSensitive: boolean;
    submittedUser: User;
    associatedCase: Case;

    constructor(
        documentName: string,
        documentDescription: string,
        documentURL: string,
        isSensitive: boolean,
        submittedUser: User,
        associatedCase: Case
    ) {
        this.documentName = documentName;
        this.documentDescription = documentDescription;
        this.documentURL = documentURL;
        this.isSensitive = isSensitive;
        this.submittedUser = submittedUser;
        this.associatedCase = associatedCase;
    }
}