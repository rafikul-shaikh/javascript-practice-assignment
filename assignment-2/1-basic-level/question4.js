// Q.4) Write a function that returns a Promise to add two numbers asynchronously.

function addAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                resolve(a + b);
            } else {
                reject("Both inputs must be numbers");
            }
        }, 1000); // Simulating async operation (1 second delay)
    });
}

// Example usage:
addAsync(10, 20)
    .then((result) => {
        console.log("Result:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });