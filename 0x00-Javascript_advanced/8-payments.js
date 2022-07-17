/*
Write a function processPayment:

It takes one argument amount (number)
It logs to the console Collecting payment of <amount>
Write a function named processOrder:

It takes two arguments orderId (number), and amount (number)
It logs to the console <orderId> is being processed
It calls the function processPayment
It logs to the console <orderId> has been fully processed
In the main part of the code:

Logs to the console Processing orders
Call processOrder with 12321 and 10.99
Call processOrder with 12322 and 12.99
Call processOrder with 12323 and 15.0
Logs to the console All the orders have been processed*/
function processPayment(amount) {
  console.log(`Collecting payment of ${amount}`);;
}

function processOrder(orderId, amount) {
  console.log(`${orderId} is being processed`);
  processPayment(amount);
  console.log(`${orderId} has been fully processed`);
}

console.log("Processing orders");
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log("All the orders have been processed");
