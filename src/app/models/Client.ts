import { Case } from './Case';
import { User } from './User';

export class Client extends User{
    cases: Case[];

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        cases: Case[]
    ) {
        super(firstName, lastName, email);
        this.cases = cases;
    }
}