// Q.16 Write a Promise that rejects if given number is negative

function checkNumber(n) {
    return new Promise(function(resolve, reject) {
        if (n < 0) {
            reject("Rafikul Number is negative");
        } else {
            resolve("Rafikul Number is valid");
        }
    });
}

// Example usage

checkNumber(5)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

// Try with negative number

checkNumber(-3)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });