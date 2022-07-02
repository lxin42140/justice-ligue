export class User {
    firstName: string;
    lastName: string;
    email: string;
    id: string

    constructor(
        firstName: string,
        lastName: string,
        email: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.id = (Math.random() + 1).toString(36).substring(7);
    }
}