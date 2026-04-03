// Q.7 Demonstrate error bubbling through multiple then calls until catch handles it

new Promise(function(resolve) {
    resolve("Rafikul Step 1 completed");
})
.then(function(result) {
    console.log(result);
    return "Rafikul Step 2 completed";
})
.then(function(result) {
    console.log(result);

    // error occurs here
    throw new Error("Rafikul error in Step 3");

})
.then(function(result) {
    // this will be skipped
    console.log(result);
    return "Rafikul Step 4 completed";
})
.then(function(result) {
    // this will also be skipped
    console.log(result);
})
.catch(function(error) {
    console.log("Caught:", error.message);
});