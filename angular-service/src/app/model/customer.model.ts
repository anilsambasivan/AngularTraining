export class Customer {
    public id: number;
    public firstName: string;
    public lastName: string;
    public address: Address;
}

export class Address {
    public city: string;
    public state: string;
    public street: string;
    public zip: string;
}