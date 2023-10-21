class FlightBookingSystem {
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  }
  addFlight(flightNumber, destination, departureTime, price) {
    price = Number(price);
    let findFlight = this.flights.find((x) => {
      return x.flightNumber == flightNumber;
    });
    if (findFlight == undefined) {
      this.flights.push({ flightNumber, destination, departureTime, price });
      return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    } else {
      return `Flight ${flightNumber} to ${destination} is already available.`;
    }
  }
  bookFlight(passengerName, flightNumber) {
    let findFlight = this.flights.find((x) => {
      return x.flightNumber == flightNumber;
    });
    if (findFlight == undefined) {
      return `Flight ${flightNumber} is not available for booking.`;
    } else {
      this.bookings.push({
        passengerName,
        flightNumber,
        price: findFlight.price,
        destination: findFlight.destination,
        departureTime:findFlight.departureTime
      });
      this.bookingsCount += 1;
      return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }
  }
  cancelBooking(passengerName, flightNumber) {
    let findPasenger = this.bookings.find((x) => {
      return (
        x.passengerName == passengerName || this.flightNumber == flightNumber
      );
    });
    if (findPasenger == undefined) {
      throw new Error(
        `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
      );
    } else {
      this.bookingsCount -= 1;
      this.bookings = this.bookings.filter((x) => {
        return (
          x.passengerName != passengerName && this.flightNumber != flightNumber
        );
      });

      return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }
  }
  showBookings(criteria) {
    if (this.bookings.length == 0) {
      throw new Error(`No bookings have been made yet.`);
    }
    let priceCheapFilter = this.bookings.filter((x) => {
      return x.price <= 100;
    });
    let priceExpensiveFilter = this.bookings.filter((x) => {
      return x.price >= 100;
    });
    let result = [];
    if (criteria == "all") {
      result.push(`All bookings(${this.bookingsCount}):`);
      for (let el of this.bookings) {
        result.push(
          `${el.passengerName} booked for flight ${el.flightNumber}.`
        );
      }
    }
    if (criteria == "cheap") {
      //   console.log(JSON.stringify(priceCheapFilter));
      if (priceCheapFilter.length == 0) {
        return "No cheap bookings found.";
      } else {
        result.push("Cheap bookings:");
        for (let el of priceCheapFilter) {
          result.push(
            `${el.passengerName} booked for flight ${el.flightNumber}.`
          );
        }
      }
    }
    if (criteria == "expensive") {
      //   console.log(JSON.stringify(priceExpensiveFilter));
      if (priceExpensiveFilter.length == 0) {
        return "No expensive bookings found.";
      } else {
        result.push("Expensive bookings:");
        for (let el of priceExpensiveFilter) {
          result.push(
            `${el.passengerName} booked for flight ${el.flightNumber}.`
          );
        }
      }
    }
    return result.join("\n");
  }
}
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 50));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 80));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));
