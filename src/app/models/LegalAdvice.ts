import { Lawyer } from './Lawyer';
import { Case } from './Case';

export class LegalAdvice {
    adviceSummary: string;
    associateCase: Case;
    lawyer: Lawyer;

    constructor(
        adviceSummary: string,
        associateCase: Case,
        lawyer: Lawyer
    ) {
        this.adviceSummary = adviceSummary;
        this.associateCase = associateCase;
        this.lawyer = lawyer;
    }
    
}