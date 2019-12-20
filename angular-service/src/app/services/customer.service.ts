import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from '../model/customer.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root',
})
export class CustomerService {

    private customersUrl = 'http://localhost:3000/customers';

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customersUrl, httpOptions).pipe(
            catchError(this.handleError<Customer[]>('getCustomers')));
    }

    getCustomer(id: number): Observable<Customer> {
        return this.http.get<Customer>(this.customersUrl + '/' + id, httpOptions).pipe(
            catchError(this.handleError<Customer>('getCustomer')));
    }

    saveCustomer(data: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.customersUrl, data, httpOptions).pipe(
            catchError(this.handleError<Customer>('saveCustomer')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            return of(result as T);
        };
    }
}