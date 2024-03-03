class Customer {
  constructor(username, balance, discountRate, orders) {
    this.username = username;
    this.balance = balance;
    this.discountRate = discountRate;
    this.orders = orders;
  }

  getBalance() {
    return this.balance;
  }

  getDiscountRate() {
    return this.discountRate;
  }

  setDiscountRate(value) {
    this.discountRate = value;
  }

  getOrders() {
    return this.orders;
  }

  addOrder(cost, order) {
    this.balance -= cost - cost * this.discountRate;
    this.orders.push(order);
  }
}

const customer = new Customer("Mango", 24000, 0.1, ["Burger", "Pizza", "Salad"]);

customer.setDiscountRate(0.15);
console.log(customer.getDiscountRate()); // 0.15

customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750

console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]