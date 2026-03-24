// Q.5 Implement a Promise withTimeout promise ms that rejects if promise takes too long


function withTimeout(promise, ms) {
    return new Promise(function(resolve, reject) {

        // Timer Promise
        const timeout = new Promise(function(_, reject) {
            setTimeout(function() {
                reject("Rafikul Timeout Error");
            }, ms);
        });

        // Race between actual promise and timeout
        Promise.race([promise, timeout])
            .then(function(result) {
                resolve(result);
            })
            .catch(function(error) {
                reject(error);
            });
    });
}

// Example task

function slowTask() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul Task Completed");
        }, 3000);
    });
}

// Using withTimeout

withTimeout(slowTask(), 2000)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });