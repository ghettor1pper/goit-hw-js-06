class Customer {
  constructor(username, balance, discount, orders) {
    this.username = username;
    this.balance = balance;
    this.discount = discount;
    this.orders = orders;
  }

  getBalance() {
    return this.balance;
  }

  getDiscount() {
    return this.discount;
  }

  setDiscount(value) {
    this.discount = value;
  }

  getOrders() {
    return this.orders;
  }

  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  }
}

const customer = new Customer("Mango", 24000, 0.1, ["Burger", "Pizza", "Salad"]);

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15

customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750

console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
