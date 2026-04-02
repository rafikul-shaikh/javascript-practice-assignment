// Q.13 Inside then return a new Promise that resolves after 1 second

new Promise(function(resolve) {
    resolve("Rafikul Step 1 completed");
})
.then(function(result) {
    console.log(result);

    // returning a new Promise inside then
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul Step 2 completed after 1 second");
        }, 1000);
    });
})
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log("Error", error);
});