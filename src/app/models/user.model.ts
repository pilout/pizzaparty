export class User {
    lastName: string;
    firstName: string;
    birthdate: string;
    avatar: string;
    id : number;
    password: string;

    constructor(lastName, firstName, birthdate, avatar,password) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthdate = birthdate;
        this.avatar = avatar;
        this.password = password;
    }


}
