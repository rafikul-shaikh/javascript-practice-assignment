// Q.4 Create a chain of Promises where error occurs in the middle and is caught properly

new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Rafikul Step 1 completed");
    }, 1000);
})
.then(function(result) {
    console.log(result);
    return "Rafikul Step 2 completed";
})
.then(function(result) {
    console.log(result);

    // Error occurs here in the middle
    throw new Error("Rafikul something went wrong in Step 3");

    // This will not execute
    return "Rafikul Step 3 completed";
})
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log("Caught Error:", error.message);
});