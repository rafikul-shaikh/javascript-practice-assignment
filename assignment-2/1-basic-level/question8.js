// Q.7) Create a Promise that waits 2 seconds and then resolves with a random number.

function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random(); // Generates number between 0 and 1
            resolve(randomNum);
        }, 2000); // Wait 2 seconds
    });
}

// Example usage:
console.log("Waiting for random number...");

getRandomNumber()
    .then((number) => {
        console.log("Random Number:", number);
    })
    .catch((error) => {
        console.log("Error:", error);
    });