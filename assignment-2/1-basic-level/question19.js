// Q.19 Write a Promise that simulates validating a password resolve if 1234 reject otherwise

function validatePassword(password) {
    return new Promise(function(resolve, reject) {
        if (password === "1234") {
            resolve("Rafikul Password is correct");
        } else {
            reject("Rafikul Invalid password");
        }
    });
}

// Example usage

validatePassword("1234")
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

// Try with wrong password

validatePassword("abcd")
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });