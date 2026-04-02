// Q.15 Create a Promise that resolves Task Completed after 3 seconds and then log it


function completeTask() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul Task Completed");
        }, 3000);
    });
}

// Using the Promise

completeTask()
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log("Error", error);
    });