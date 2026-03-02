// Q.7) Implement a Promise-based function that multiplies two numbers and logs result.

function multiplyAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                resolve(a * b);
            } else {
                reject("Inputs must be numbers");
            }
        }, 1000); // Simulating async delay
    });
}

// Example usage:
multiplyAsync(5, 6)
    .then((result) => {
        console.log("Multiplication Result:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });