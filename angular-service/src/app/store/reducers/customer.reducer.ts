  
import { CustomerActions, CustomerActionTypes } from '../actions/customer.actions';
import { initialCustomerState, ICustomerState } from '../state/customer.state';
import { areCustomersLoaded } from '../selectors/customer.selector';

export const customerReducers = (
  state = initialCustomerState,
  action: CustomerActions
): ICustomerState => {
  switch (action.type) {
    case CustomerActionTypes.GetCustomersSuccess: {
      return {
        ...state,
        customers: action.payload,
        areCustomersLoaded:  true,
      };
    }

    case CustomerActionTypes.GetCustomerSuccess: {
      return {
        ...state,
        selectedCustomer: action.payload
      };
    }

    case CustomerActionTypes.SaveCustomer: {
      return {
        ...state,
        areCustomersLoaded:  false,
      };
    }

    default:
      return state;
  }
};