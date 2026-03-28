// Q.13 Implement a Promise that resolves an array 1 2 3 4 5 after 1 second


function getNumbers() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve([1, 2, 3, 4, 5]);
        }, 1000);
    });
}

// Using the Promise

getNumbers()
    .then(function(result) {
        console.log("Rafikul received array", result);
    })
    .catch(function(error) {
        console.log("Error", error);
    });