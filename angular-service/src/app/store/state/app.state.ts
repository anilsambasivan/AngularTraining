  
import { RouterReducerState } from '@ngrx/router-store';

import { ICustomerState, initialCustomerState } from './customer.state';


export interface IAppState {
  router?: RouterReducerState;
  customers: ICustomerState;
}

export const initialAppState: IAppState = {
  customers: initialCustomerState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}