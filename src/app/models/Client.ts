import { Case } from './Case';
import { User } from './User';
import { Meeting } from './Meeting';

export class Client extends User {
    cases: Case[];
    scheduledMeetings: Meeting[];

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        cases: Case[],
        scheduledMeetings: Meeting[]
    ) {
        super(firstName, lastName, email);
        this.cases = cases;
        this.scheduledMeetings = scheduledMeetings;
    }
}