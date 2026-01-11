// Task 3: Functions with Conditional Logic

function checkEligibility (age, isEmployed) {
    if (age < 18) {
        console.log("You are under 18. You are not eligible.");
        return;
    }
    if (age >=18) {
        switch (isEmployed) {
            case ('Y'):
                console.log("You are over 18 and are employed. You are eligible.");
                break;
            case ('N'):
                console.log("You are over 18 and are not employed. You are conditionally eligible.");
                break;
            default:
                console.log("Invalid input");
        }
        return
    }
    console.log("Invalid input");
}

checkEligibility(Number(prompt("What is your age?")),prompt("Are you employed? Y/N"))

// is over 18 and is employed = eligible

// is over 18 and is not employed = conditionally eligible

// is under 18 = not eligible