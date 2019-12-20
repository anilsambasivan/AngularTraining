import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { SaveCustomer, GetCustomer } from '../store/actions/customer.actions';
import { selectedCustomer } from '../store/selectors/customer.selector';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {
  public customerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  private customerId = 0;

  customer$ = this.store.pipe(select(selectedCustomer)); 
public customerDetails: Customer;
constructor(private store: Store<IAppState>,
  private route: ActivatedRoute,
  private router: Router,) { 
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new GetCustomer(+params.id));
    });
    
    this.customer$.subscribe((data) => {
      if(data) {
        this.customerId = data.id;
        this.customerForm.patchValue(data)
      }
    });
  }

  public onSubmit(): void {
    this.customerForm.value.id = this.customerId;

    const customer = new Customer(); 
    this.store.dispatch(new SaveCustomer(this.customerForm.value)); 
    console.log(this.customerForm.value);
  }

  public getFormControl(name: string) {
    return this.customerForm.get(name);
  }
}