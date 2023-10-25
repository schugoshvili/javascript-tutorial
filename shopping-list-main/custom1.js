// // a = 21;
// // b = a * 2;
// // console.log(b);

// // age = prompt('please tell me your age');
// // console.log(age);

// // a = 2;
// // b = a + 1;

// // console.log(b);

// // var a = 20;
// // a += 1;
// // a *= 2;

// // console.log( a ); // 42


// // const a = { duration: 50 };

// // a.duration ??= 10;
// // console.log(a.duration);
// // // Expected output: 50

// // a.speed ??= 25;
// // console.log(a.speed);
// // // Expected output: 25

// // Define the phone price and employee responses
// // const phonePrice = 99.99;  // Define the phone price as a constant

// // function calculateCost(employeeResponse) {
// //     if (employeeResponse === "ninety-nine, ninety-nine") {
// //         return phonePrice;
// //     } else if (employeeResponse.toLowerCase() === "free") {
// //         return 0.00;
// //     }
// // }

// // // Ask the employee about the cost of a phone
// // const employeeResponse = "ninety-nine, ninety-nine"; // You can change this value

// // // Calculate the cost for two phones
// // const cost = calculateCost(employeeResponse);
// // const totalCost = cost * 2;

// // // Ask about the charger
// // const chargerIncluded = "yes"; // Change this to "no" if not included

// // // Print the results
// // console.log(`Cost of one phone: $${cost.toFixed(2)}`);
// // console.log(`Total cost for two phones: $${totalCost.toFixed(2)}`);
// // console.log(`Charger included: ${chargerIncluded}`);

// // var a = "42";
// // var b = Number( a );
// // console.log( a, typeof a ); // "42"
// // console.log( b, typeof b ); // 42

// // var TAX_RATE = 0.08; // 8% sales tax
// // var amount = 99.99;
// // amount = amount * 2;
// // amount = amount + (amount * TAX_RATE);
// // console.log( amount ); // 215.9784
// // console.log( amount.toFixed( 2 ) ); // "215.98"

// // const ACCESSORY_PRICE = 9.99;
// // var bank_balance = 302.13;
// // var amount = 99.99;
// // amount = amount * 2;
// // // can we afford the extra purchase?
// // if ( amount < bank_balance ) {
// //  console.log( "I'll take the accessory!" );
// //  amount = amount + ACCESSORY_PRICE;
// // }
// // // otherwise:
// // else {
// //  console.log( "No, thanks." );
// // }

// // let numOfCustomers = 10;

// // for (let i = 0; i <= 10; i++)

// // while (numOfCustomers > 0) {
// //     console.log( "How may I help you?" );
// //     // help the customer...
// //     numOfCustomers = numOfCustomers - 1;
// //    }
// //    // versus:
// //    do {
// //     console.log( "How may I help you?" );
// //     // help the customer...
// //     numOfCustomers = numOfCustomers - 1;
// //    } while (numOfCustomers > 0);
   

// // for (let i = 0; i <= 10; i++) {
// //     console.log("How may I help you?");
// //     // help the customer...
// // }

// // Reset numOfCustomers for the following loops
// // numOfCustomers = 10;

// // // Using a while loop
// // while (numOfCustomers > 0) {
// //     console.log("How may I help you?");
// //     // help the customer...
// //     numOfCustomers = numOfCustomers - 1;
// // }

// // Reset numOfCustomers for the next loop
// // numOfCustomers = 10;

// // // Using a do-while loop
// // do {
// //     console.log("How may I help you?");
// //     // help the customer...
// //     numOfCustomers = numOfCustomers - 1;
// // // } while (numOfCustomers > 0);

// // var i = 0;
// // // a `while..true` loop would run forever, right?
// // while (true) {
// //  // keep the loop going?
// //  if (i <= 9) {
// //  console.log( i );
// //  i++;

// //  }
// //  // time to stop the loop!
// //  else {
// //  break;
// //  }
// // }
// // // 0 1 2 3 4 5 6 7 8 9

// // function printAmount() {
// //     console.log( amount.toFixed( 2 ) );
// //    }
// //    var amount = 99.99;
// //    printAmount(); // "99.99"
// //    amount = amount * 2;
// //    printAmount(); // "199.98"

// //    function printAmount(amt) {
// //     console.log( amt.toFixed( 2 ));
// //    }
// //    function formatAmount() {
// //     return "$" + amount.toFixed( 2 );
// //    }
// //    var amount = 99.99;
// //    printAmount( amount * 2 ); // "199.98"
// //    amount = formatAmount();
// // //    console.log( amount ); // "$99.99"

// // const TAX_RATE = 0.08;
// // function calculateFinalPurchaseAmount(amt) {
// //  // calculate the new amount with the tax
// //  amt = amt + (amt * TAX_RATE);
// //  // return the new amount
// //  return amt;
// // }
// // var amount = 99.99;
// // amount = calculateFinalPurchaseAmount( amount );
// // console.log( amount.toFixed( 2 ) ); // "107.99"

// // function one() {
// //     // this `a` only belongs to the `one()` function
// //     var a = 1;
// //     console.log( a );
// //    }
// //    function two() {
// //     // this `a` only belongs to the `two()` function
// //     var a = 2;
// //     console.log( a );
// //    }
// //    one(); // 1
// //    two(); // 2

// function outer() {
//     var a = 1;
//     function inner() {
//     var b = 2;
//     // we can access both `a` and `b` here
//     console.log( a + b ); // 3
//     }
//     inner();
//     // we can only access `a` here
//     console.log( a ); // 1
//    }
//    outer();

// const phonePrice = 500; // Price of one phone
// const accessoryPrice = 50; // Price of one accessory
// const spendingThreshold = 1000; // Your spending limit
// const bankAccountBalance = 2000; // Your bank account balance
// let totalPurchaseAmount = 0;

// // Function to calculate the tax on the purchase
// function calculateTax(amount) {
//     const taxRate = 0.08; // 8% sales tax
//     return amount * taxRate;
// }

// while (totalPurchaseAmount + phonePrice + calculateTax(totalPurchaseAmount) < spendingThreshold && totalPurchaseAmount + phonePrice <= bankAccountBalance) {
//     totalPurchaseAmount += phonePrice;
    
//     if (totalPurchaseAmount + calculateTax(totalPurchaseAmount) < spendingThreshold) {
//         totalPurchaseAmount += accessoryPrice;
//     }
// }

// totalPurchaseAmount += calculateTax(totalPurchaseAmount);

// console.log("Total purchase amount: $" + totalPurchaseAmount.toFixed(2));

// if (totalPurchaseAmount > bankAccountBalance) {
//     console.log("You cannot afford this purchase.");
// } else {
//     console.log("Purchase successful!");
// }



// // Constants
// const taxRate = 0.08; // 8% sales tax
// const phonePrice = 500; // Price of one phone
// const accessoryPrice = 50; // Price of one accessory
// const spendingThreshold = 1000; // Your spending limit

// // Function to calculate the tax on the purchase
// function calculateTax(amount) {
//     return amount * taxRate;
// }

// // Function to format a number as currency
// function formatCurrency(amount) {
//     return "$" + amount.toFixed(2);
// }

// // Prompt the user for their bank account balance
// let bankAccountBalance = parseFloat(prompt("Enter your bank account balance:"));

// if (isNaN(bankAccountBalance)) {
//     console.log("Invalid input. Please enter a valid number for your bank account balance.");
// } else {
//     let totalPurchaseAmount = 0;

//   while (totalPurchaseAmount + phonePrice <= bankAccountBalance) {
//         totalPurchaseAmount += phonePrice;

//         if (totalPurchaseAmount <= spendingThreshold) {
//             totalPurchaseAmount += accessoryPrice;
//         }
//     }

//     const taxAmount = calculateTax(totalPurchaseAmount);
//     totalPurchaseAmount += taxAmount;

//     console.log("Total purchase amount: " + formatCurrency(totalPurchaseAmount));

//     if (totalPurchaseAmount > bankAccountBalance) {
//         console.log("You cannot afford this purchase.");
//     } else {
//         console.log("Purchase successful!");
//     }
// }


