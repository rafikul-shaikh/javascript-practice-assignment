// Q.9 Write a function that throws error if input is less than 0 otherwise resolves after 1 second

function checkNumber(number) {
    return new Promise(function(resolve, reject) {

        if (number < 0) {
            reject(new Error("Negative number is not allowed for Rafikul"));
            return;
        }

        setTimeout(function() {
            resolve("Valid number for Rafikul: " + number);
        }, 1000);

    });
}

// Example usage

checkNumber(10)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log("Caught:", error.message);
    });

checkNumber(-5)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log("Caught:", error.message);
    });