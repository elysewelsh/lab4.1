// Task 1: Flexible String Manipulation with Functions

// function formatFullName(firstName, lastName) {
//     if (firstName === null) {
//         console.log("Invalid name input")
//     } else if (lastName === null) {
//         console.log("Invalid name input")
//     } else {
//         let letterFirst = (firstName.charAt(0)).toUpperCase();
//         let letterLast = (lastName.charAt(0)).toUpperCase();
//         let restFirst = (firstName.slice(1)).toLowerCase();
//         let restLast = (lastName.slice(1)).toLowerCase();
//         console.log((letterLast+restLast) + ", " + letterFirst+restFirst);
//     }
// }
// formatFullName((prompt("What is your First Name?")),(prompt("What is your Last Name?")));

// Task 2: Mathematical Operations with Multiple Parameters

// function calculateTotalCost(price, quantity, taxRate) {
//     console.log(price, quantity, taxRate);
//     if (isNaN(price)) {
//         console.log("Invalid input")
//         return
//     }
//     if(isNaN(quantity)) {
//         console.log("Invalid input")
//         return
//     }
//     if (isNaN(taxRate)) {
//         if (taxRate.includes('%')) {
//             let percentRate = parseFloat(taxRate);
//             if (isNaN(percentRate)) {
//                 console.log("Invalid input")
//                 return
//             }
//             taxRate = (percentRate/100)
//         }
//         else {
//         console.log("Invalid input")
//         return
//         }
//     }          
//     let totalCost = (price * quantity) * (1 + (Number(taxRate)));
//     console.log(totalCost);
// }

// calculateTotalCost
// (
// prompt("What is the price?"),
// prompt("What quantity are you purchasing?"),
// prompt("What is the tax rate in your area?")
// );



// Task 3: Functions with Conditional Logic

// function checkEligibility (age, isEmployed) {
//     if (age < 18) {
//         console.log("You are under 18. You are not eligible.");
//         return;
//     }
//     if (age >=18) {
//         switch (isEmployed) {
//             case ('Y'):
//                 console.log("You are over 18 and are employed. You are eligible.");
//                 break;
//             case ('N'):
//                 console.log("You are over 18 and are not employed. You are conditionally eligible.");
//                 break;
//             default:
//                 console.log("Invalid input");
//         }
//         return
//     }
//     console.log("Invalid input");
// }

// checkEligibility(Number(prompt("What is your age?")),prompt("Are you employed? Y/N"))

// is over 18 and is employed = eligible

// is over 18 and is not employed = conditionally eligible

// is under 18 = not eligible