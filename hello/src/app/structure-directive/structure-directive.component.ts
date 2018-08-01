import { Component, OnInit } from '@angular/core';

interface Customer {
  id: number;
  name: string;
}

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {

  isShow = true;
  customerList: Customer[] = [
    {id: 1, name: "Customer 1"},
    {id: 2, name: "Customer 2"},
    {id: 3, name: "Customer 3"},

  ];
  selectedNumber = 0;
  emailValidationCheckResult: string;

  constructor() { }

  ngOnInit() {
  }

  addCustomer(customerName: string) {
    if(customerName) {
      this.customerList.push({id: this.getNewCustomerID(), name: customerName});
    }
  }

  removeUser(userID: number) {
    this.customerList = this.customerList.filter(({id}) => id !== userID);
  }

  getNewCustomerID(): number {
    return this.customerList.length ? Math.max(...this.customerList.map(({id}) => id)) + 1 : 1;
  }

  trackByCustomerID(index: number, customer: Customer) {
    return customer.id; // or index
  }

  checkEmail(email: string) {
    const regexr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(regexr.test(email)) {
      this.emailValidationCheckResult = 'ok';
    }
    else {
      this.emailValidationCheckResult = 'fail';
    }
  }
}
