// Q.3) Implement a Promise with .finally() that logs “Process Finished” no matter success or failure.

function examplePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;

            if (success) {
                resolve("Operation Successful");
            } else {
                reject("Operation Failed");
            }
        }, 1000);
    });
}

// Example usage:
examplePromise()
    .then((result) => {
        console.log("Resolved:", result);
    })
    .catch((error) => {
        console.log("Rejected:", error);
    })
    .finally(() => {
        console.log("Process Finished");
    });