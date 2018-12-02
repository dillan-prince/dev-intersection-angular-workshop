import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<ICustomer[]> {
    return this.http
      .get<ICustomer[]>('https://swapi.co/api/people/')
      .pipe(map((response) => response['results']));
  }
}
