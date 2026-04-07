// Q.20 Implement a Promise that simulates coin toss resolve Heads reject Tails

function tossCoin() {
    return new Promise(function(resolve, reject) {
        let result = Math.random() < 0.5 ? "Heads" : "Tails";

        console.log("Rafikul Coin result", result);

        if (result === "Heads") {
            resolve("Rafikul Heads");
        } else {
            reject("Rafikul Tails");
        }
    });
}

// Example usage

tossCoin()
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });