import { User } from './User';
import { LegalServiceBudget } from './LegalServiceBudget';
import { CaseInformationTemplate } from './CaseInformationTemplate';
import { LegalIssue } from './LegalIssue';
import { LawArea } from './LawArea';
import { Case } from './Case';
import { Meeting } from './Meeting';

export class Lawyer extends User {
    yearsOfExperience: number;
    practiceAreas: LawArea[];
    experiencedIssues: LegalIssue[];
    caseTemplates: CaseInformationTemplate[];
    budgets: LegalServiceBudget[];
    cases: Case[];
    scheduledMeetings: Meeting[];

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        yearsOfExperience: number,
        practiceAreas: LawArea[],
        experiencedIssues: LegalIssue[],
        caseTemplates: CaseInformationTemplate[],
        budgets: LegalServiceBudget[],
        cases: Case[],
        scheduledMeetings: Meeting[]
    ) {
        super(firstName, lastName, email);
        this.yearsOfExperience = yearsOfExperience;
        this.practiceAreas = practiceAreas;
        this.experiencedIssues = experiencedIssues;
        this.caseTemplates = caseTemplates;
        this.budgets = budgets;
        this.cases = cases;
        this.scheduledMeetings = scheduledMeetings;
    }
}