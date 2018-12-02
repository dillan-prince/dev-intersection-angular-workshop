import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../core/customers.service';
import { ICustomer } from '../interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: ICustomer[];

  constructor(private customersService: CustomersService) {}

  ngOnInit() {
    this.customersService.getCustomers().subscribe((customers) => (this.customers = customers));
  }
}
