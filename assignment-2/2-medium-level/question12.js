// Q.12 Chain Promises where the second then intentionally throws error and handle it in catch

new Promise(function(resolve) {
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

    // intentional error
    throw new Error("Rafikul error occurred in Step 2");

})
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log("Caught:", error.message);
});