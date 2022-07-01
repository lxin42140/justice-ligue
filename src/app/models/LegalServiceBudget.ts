import { Lawyer } from './Lawyer';
import { LegalService } from './LegalService';
import { LegalIssue } from './LegalIssue';
import { LawArea } from './LawArea';

export class LegalServiceBudget {
    budgetLowerBound: number;
    budgetHigherBound: number;
    legalServices: LegalService[];
    lawAreas: LawArea[];
    legalIssues: LegalIssue[];
    lawyer: Lawyer;

    constructor(
        budgetLowerBound: number,
        budgetHigherBound: number,
        legalServices: LegalService[],
        lawAreas: LawArea[],
        legalIssues: LegalIssue[],
        lawyer: Lawyer
    ) {
        this.budgetHigherBound = budgetHigherBound;
        this.budgetLowerBound = budgetLowerBound;
        this.legalServices = legalServices;
        this.lawAreas = lawAreas;
        this.legalIssues = legalIssues;
        this.lawyer = lawyer;
    }
}
