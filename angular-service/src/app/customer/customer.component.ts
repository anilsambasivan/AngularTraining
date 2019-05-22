import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
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

  private latestId = 0;
  constructor(private service: CustomerService) {
  }

  ngOnInit() {
    this.service.getCustomers().subscribe((customers) => {
      console.log(JSON.stringify(customers));
      this.latestId = customers.length + 1;
    });
  }

  public onSubmit(): void {
    this.customerForm.value.id = this.latestId;
    this.service.saveCustomer(this.customerForm.value).subscribe();
    console.log(this.customerForm.value);
    this.latestId = this.latestId + 1;
  }

  public getFormControl(name: string) {
    return this.customerForm.get(name);
  }
}