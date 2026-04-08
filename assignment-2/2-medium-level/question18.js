// Q.18 Create a function asyncTask that returns a Promise call it and handle result outside

function asyncTask() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Rafikul Async task completed");
        }, 1000);
    });
}

// calling the function and handling outside

const resultPromise = asyncTask();

resultPromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log("Error", error);
    });