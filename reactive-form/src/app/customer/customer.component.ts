import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });
  constructor() {
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
