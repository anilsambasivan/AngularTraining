import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { GetCustomers } from '../store/actions/customer.actions';
import { selectCustomerList } from '../store/selectors/customer.selector';
import { IAppState } from '../store/state/app.state';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
  customers$ = this.store.pipe(select(selectCustomerList)); 

constructor(private store: Store<IAppState>, private _router: Router) { 
}

  ngOnInit() {
    this.store.dispatch(new GetCustomers());
  }

  navigateToCustomer(id: number){
    this._router.navigate(['customer', id]);
  }
}