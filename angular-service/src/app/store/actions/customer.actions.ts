import { Action } from '@ngrx/store';

import { Customer } from '../../model/customer.model';

export enum CustomerActionTypes {
  GetCustomers = '[User] Get Customers',
  GetCustomersSuccess = '[Customer] Get Customers Success',
  GetCustomer = '[User] Get Customer',
  GetCustomerSuccess = '[Customer] Get Customer Success',
  SaveCustomer = '[Customer] Save Customer',
  SaveCustomerSuccess = '[Customer] Save Customer Success'
}

export class GetCustomers implements Action {
  public readonly type = CustomerActionTypes.GetCustomers;
}

export class GetCustomersSuccess implements Action {
  public readonly type = CustomerActionTypes.GetCustomersSuccess;
  constructor(public payload: Customer[]) {}
}

export class GetCustomer implements Action {
  public readonly type = CustomerActionTypes.GetCustomer;
  constructor(public payload: number) {}
}

export class GetCustomerSuccess implements Action {
  public readonly type = CustomerActionTypes.GetCustomerSuccess;
  constructor(public payload: Customer) {}
}

export class SaveCustomer implements Action {
  public readonly type = CustomerActionTypes.SaveCustomer;
  constructor(public payload: Customer) {}
}

export class SaveCustomerSuccess implements Action {
  public readonly type = CustomerActionTypes.SaveCustomerSuccess;
  constructor() {}
}

export type CustomerActions = GetCustomers | GetCustomersSuccess | GetCustomer | GetCustomerSuccess | SaveCustomer | SaveCustomerSuccess;