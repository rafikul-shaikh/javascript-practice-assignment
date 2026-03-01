// Q.5) Create a Promise that randomly resolves “Success” or rejects “Failed”.

function randomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomValue = Math.random(); // Generates number between 0 and 1

            if (randomValue > 0.5) {
                resolve("Success");
            } else {
                reject("Failed");
            }
        }, 1000); // Simulating async delay (1 second)
    });
}

// Example usage:
randomPromise()
    .then((message) => {
        console.log("Resolved:", message);
    })
    .catch((error) => {
        console.log("Rejected:", error);
    });