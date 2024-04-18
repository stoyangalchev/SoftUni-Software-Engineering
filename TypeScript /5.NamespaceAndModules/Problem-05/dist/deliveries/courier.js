"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Courier {
    customers;
    constructor(customers) {
        this.customers = customers;
    }
    newCustomer(customerName) {
        this.customers.push({ customerName, visited: false });
    }
    visitCustomer(customerName) {
        this.customers.forEach((customer) => {
            if (customer.customerName === customerName) {
                customer.visited = true;
            }
        });
        return customerName;
    }
    showCustomers() {
        return this.customers.map((customer) => `${customer.customerName} -> ${customer.visited}`).join("\n");
    }
}
let courier = new Courier([
    {
        customerName: "DHL",
        visited: false,
    },
]);
courier.newCustomer("Speedy");
courier.newCustomer("MTM");
courier.newCustomer("TipTop");
courier.visitCustomer("DHL");
courier.visitCustomer("MTM");
courier.visitCustomer("MTM");
console.log(courier.showCustomers());
// Output:
//DHL -> true Speedy -> false MTM -> true TipTop -> false
