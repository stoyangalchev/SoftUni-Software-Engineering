import { FoodAndBeverages } from "./deliveries";
class Courier implements FoodAndBeverages.Delivery {
  customers: { customerName: string; visited: boolean }[];

  constructor(customers: { customerName: string; visited: boolean }[]) {
    this.customers = customers;
  }

  newCustomer(customerName: string): void {
    this.customers.push({ customerName, visited: false });
  }

  visitCustomer(customerName: string): string {
    this.customers.forEach((customer) => {
      if (customer.customerName === customerName) {
        customer.visited = true;
      }
    });
    return customerName;
  }

  showCustomers(): string {
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
