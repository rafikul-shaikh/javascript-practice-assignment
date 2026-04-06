// Q.17 Implement a Promise based function getSquare n that resolves with square of n

function getSquare(n) {
    return new Promise(function(resolve, reject) {
        if (typeof n !== "number") {
            reject("Rafikul Input must be a number");
            return;
        }

        let result = n * n;
        resolve("Rafikul Square is " + result);
    });
}

// Example usage

getSquare(5)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

// Try with invalid input

getSquare("a")
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });