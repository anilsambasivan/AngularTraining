export class User {
    public name: string;
    public email: string;
    public phone: string;
    public company: string;

    /**
     *
     */
    constructor(data?: User) {
        this.name = data.name;
        this.email = data.email;
        this.phone = data.phone;
        this.company = data.company;
    }
}