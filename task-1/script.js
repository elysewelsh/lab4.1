// Task 1: Flexible String Manipulation with Functions

function formatFullName(firstName, lastName) {
    if (firstName === null) {
        console.log("Invalid name input")
    } else if (lastName === null) {
        console.log("Invalid name input")
    } else {
        let letterFirst = (firstName.charAt(0)).toUpperCase();
        let letterLast = (lastName.charAt(0)).toUpperCase();
        let restFirst = (firstName.slice(1)).toLowerCase();
        let restLast = (lastName.slice(1)).toLowerCase();
        console.log((letterLast+restLast) + ", " + letterFirst+restFirst);
    }
}
formatFullName((prompt("What is your First Name?")),(prompt("What is your Last Name?")));