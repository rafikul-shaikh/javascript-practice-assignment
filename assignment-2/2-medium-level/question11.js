// Q.11 Write a Promise that rejects after 1 second and handle it with catch


function rejectAfterDelay() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("Rafikul Error occurred after 1 second");
        }, 1000);
    });
}

// Using the Promise

rejectAfterDelay()
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log("Caught:", error);
    });