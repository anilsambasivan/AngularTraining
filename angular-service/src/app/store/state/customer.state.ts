import { Customer } from 'src/app/model/customer.model';

export interface ICustomerState {
     customers: Customer[];
     selectedCustomer: Customer;
     areCustomersLoaded: boolean;
}

export const initialCustomerState: ICustomerState = {
    customers: null,
    selectedCustomer: null,
    areCustomersLoaded: false,
}