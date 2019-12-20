import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom, filter } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetCustomersSuccess,
  CustomerActionTypes,
  SaveCustomerSuccess,
  SaveCustomer,
  GetCustomers,
  GetCustomer,
  GetCustomerSuccess
} from '../actions/customer.actions';
import { CustomerService } from '../../services/customer.service';
import { selectCustomerList, areCustomersLoaded } from '../selectors/customer.selector';
import { Customer } from 'src/app/model/customer.model';

@Injectable()
export class CustomerEffects {
  @Effect()
  saveCustomer$ = this._actions$.pipe(
    ofType<SaveCustomer>(CustomerActionTypes.SaveCustomer),
    map(action => action.payload),
    switchMap(customerData => this._customerService.saveCustomer(customerData)),
    map((response) => new SaveCustomerSuccess())
  );

  @Effect()
  getCustomers$ = this._actions$.pipe(
    ofType<GetCustomers>(CustomerActionTypes.GetCustomers),
    withLatestFrom(this._store.select(areCustomersLoaded)),
    filter(([action, hasLoaded]) => {
        return !hasLoaded;
    }),
    switchMap(() => {
        return this._customerService.getCustomers();
    }),
    map((customers: Customer[]) => {
        return new GetCustomersSuccess(customers);
    }),
  );

  @Effect()
  getCustomer$ = this._actions$.pipe(
    ofType<GetCustomer>(CustomerActionTypes.GetCustomer),
    map(action => action.payload),
    switchMap((id) => this._customerService.getCustomer(id)),
    map((customer: Customer) => {
        return new GetCustomerSuccess(customer);
    })
  );

  constructor(
    private _customerService: CustomerService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}