// Q.10 Create a Promise based timer that counts from 1 to 5 with 1 second delay each step

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

function runTimer() {
    let promise = Promise.resolve();

    for (let i = 1; i <= 5; i++) {
        promise = promise.then(function() {
            return delay(1000).then(function() {
                console.log("Rafikul count", i);
            });
        });
    }
}

runTimer();