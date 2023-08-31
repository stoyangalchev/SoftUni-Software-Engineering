function tickets(ticketsArray, sortString) {
  class Tickets {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let array = [];
  ticketsArray.map((x) => {
    let [destination, price, status] = x.split("|");
    price = Number(price);
    array.push(new Tickets(destination, price, status));
  });
  return array.sort((a, b) => {
    if (typeof a[sortString] == "number") {
      return a[sortString] - b[sortString];
    }
    return a[sortString].localeCompare(b[sortString]);
  });
}

console.log(
  JSON.stringify(
    tickets(
      [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
      ],
      "status"
    )
  )
);
