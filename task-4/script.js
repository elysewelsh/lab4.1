// Task 2: Mathematical Operations with Multiple Parameters
// Task 4: Refactoring for Reusability

function calculateTotalCost(price, quantity, taxRate) {
    console.log(price, quantity, taxRate);
    if (isNaN(price)) {
        console.log("Invalid input")
        return
    }
    if(isNaN(quantity)) {
        console.log("Invalid input")
        return
    }
    if (isNaN(taxRate)) {
        if (taxRate.includes('%')) {
            let percentRate = parseFloat(taxRate);
            if (isNaN(percentRate)) {
                console.log("Invalid input")
                return
            }
            taxRate = (percentRate/100)
        }
        else {
        console.log("Invalid input")
        return
        }
    }          
    let totalCost = (price * quantity) * (1 + (Number(taxRate)));
    console.log(totalCost);
}

calculateTotalCost
(
prompt("What is the price?"),
prompt("What quantity are you purchasing?"),
prompt("What is the tax rate in your area?")
);