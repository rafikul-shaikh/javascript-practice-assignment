// Q.12 Create a Promise that rejects if input is not a string, otherwise resolves Valid String


function checkString(input) {
    return new Promise(function(resolve, reject) {
        if (typeof input === "string") {
            resolve("Rafikul Valid String");
        } else {
            reject("Rafikul Invalid Input Not a String");
        }
    });
}

// Example usage

checkString("Hello")
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

// Try with non string

checkString(123)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });