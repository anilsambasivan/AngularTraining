import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customerForm;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });
  }

  ngOnInit() {
  }

  public onSubmit(): void {
    console.log(this.customerForm.value);
  }

  public getFormControl(name: string) {
    return this.customerForm.get(name);
  }
}