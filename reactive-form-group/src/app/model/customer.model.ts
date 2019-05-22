export class Customer {
    public id: string;
    public firstName: string;
    public lastName: string;
    public address: Address;
}

export class Address {
    public city: string;
    public state: string;
    public street: Address;
    public zip: Address;
}