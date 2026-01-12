// Task 2: Mathematical Operations with Multiple Parameters
// Task 4: Refactoring for Reusability

function calculateTotalCost(price, quantity, discount, taxRate) {
    console.log(price, quantity, discount, taxRate);
    if (isNaN(price)) {
        console.log("Invalid input. Price not valid.")
        return
    }
    if(isNaN(quantity)) {
        console.log("Invalid input. Quantity not valid.")
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
        console.log("Invalid input. Tax Rate not valid.")
        return
        }
    }  
    if (discount === "") {
        discount = 0
    }
    if (discount === null) {
        discount = 0
    }
    if (isNaN(discount)) {
       if (discount.includes('%')) {
            let percentDiscount = parseFloat(discount);
            if (isNaN(percentDiscount)) {
                console.log("Invalid input. Discount not valid")
                return
            }
            discount = (percentDiscount/100)
        }
        else {
        console.log("Invalid input. Discount not valid.")
        return
        }
    }
    if (Number(discount) > 1) {
        console.log("Invalid input. Discount too high.")
        return
    }

    console.log(price, quantity, discount, taxRate);
    let subtotal = ((Number(price)) * (Number(quantity)));
    console.log("Subtotal: ", subtotal);
    let discountAmount = ((Number(subtotal)) * (Number(discount)));
    console.log("Discount: ",discountAmount);
    let taxableAmount = ((Number(subtotal)) - (Number(discountAmount)));
    console.log("Taxable Amount: ",taxableAmount);
    let taxAmount = ((Number(taxableAmount)) * (Number(taxRate)));
    console.log("Tax: ",taxAmount);
    let totalCost = ((Number(taxableAmount)) + (Number(taxAmount)));
    console.log("Total Cost: ",totalCost);
}

calculateTotalCost
(
prompt("What is the price of the item you are purchasing?"),
prompt("What quantity are you purchasing?"),
prompt("What is the discount amount you were offered? (Leave blank if not applicable.)"),
prompt("What is the tax rate in your area?")
);