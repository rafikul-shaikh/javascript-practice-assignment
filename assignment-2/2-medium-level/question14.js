// Q.14 Create a function that generates random number and resolves if greater than 5 else rejects

function checkRandomNumber() {
    return new Promise(function(resolve, reject) {
        let num = Math.floor(Math.random() * 10); 

        console.log("Rafikul generated number", num);

        if (num > 5) {
            resolve("Rafikul Number is greater than 5");
        } else {
            reject("Rafikul Number is 5 or less");
        }
    });
}

// Example usage

checkRandomNumber()
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });