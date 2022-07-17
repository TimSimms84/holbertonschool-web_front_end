/**Create a variable named stock:

It contains the stock for the items you are selling
It’s a dictionary with the values macbook: 2 and iphone: 4
Write a new function named processPayment:

It accepts one argument itemName (String)
It change the stock, by removing one item of the stock for the item passed in argument
It logs to the console the text Payment is being processed for item <itemName>
Write a new function named processError:

It accepts one argument itemName (String)
It logs to the console the text No more <itemName> in stock
It logs to the console the text Payment is not being processed
Write a new function named processOrder:

It accepts three arguments itemName (String), callbackPayment (function), and callbackError (function)
It logs to the console the text Verifying the stock of <itemName>
If there is enough stock for the item, it calls callbackPayment
If there is not enough stock for the item, it calls callbackError
Prompt to the user the message Please enter the item you would like to purchase (Macbook, iPhone) and pass the right callbacks */
let stock = { macbook: 2, iphone: 4 };

function processPayment(itemName) {
    stock[itemName] -= 1
    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log(`Payment is not being processed`);
}
function processOrder(itemName, callbackPayment = () => { }, callbackError = () => { }) {
    console.log(`Verifying the stock of ${itemName}`);
    if (stock[itemName] > 0) {
        callbackPayment(itemName);
    }
    else {
        callbackError(itemName);
    }
}

let item = prompt('Please enter the item you would like to purchase (Macbook, iPhone)')
processOrder(item.toLowerCase(), processPayment, processError);
