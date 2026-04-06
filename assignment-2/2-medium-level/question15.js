// Q.15 Implement nested Promises where the second depends on the first

function firstTask() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(5); 
        }, 1000);
    });
}

function secondTask(value) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(value * 2);
        }, 1000);
    });
}

// Nested Promise usage

firstTask()
    .then(function(result1) {
        console.log("Rafikul First result", result1);

        // second depends on first result
        return secondTask(result1);
    })
    .then(function(result2) {
        console.log("Rafikul Second result", result2);
    })
    .catch(function(error) {
        console.log("Error", error);
    });