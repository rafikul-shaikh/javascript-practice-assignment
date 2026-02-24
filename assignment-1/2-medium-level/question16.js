// Q.16) Implement a callback-based calculator supporting add, subtract, multiply, and divide.
// Example using Rafikul

function calculator(num1, num2, operation, callback) {
    console.log(`Hello Rafikul, performing ${operation} on ${num1} and ${num2}...`);

    let result;

    if (operation === "add") {
        result = num1 + num2;
    } 
    else if (operation === "subtract") {
        result = num1 - num2;
    } 
    else if (operation === "multiply") {
        result = num1 * num2;
    } 
    else if (operation === "divide") {
        if (num2 === 0) {
            return callback("Error: Cannot divide by zero", null);
        }
        result = num1 / num2;
    } 
    else {
        return callback("Invalid operation", null);
    }

    callback(null, result);
}

// Callback function
function showResult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log("Result:", result);
    }
}

// Calling the calculator for Rafikul
calculator(10, 5, "add", showResult);
calculator(10, 5, "subtract", showResult);
calculator(10, 5, "multiply", showResult);
calculator(10, 5, "divide", showResult);