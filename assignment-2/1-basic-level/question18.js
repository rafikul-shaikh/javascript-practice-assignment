// Q.18 Create a Promise chain that prints First Second Third

new Promise(function(resolve) {
    resolve("Rafikul First");
})
.then(function(result) {
    console.log(result);
    return "Rafikul Second";
})
.then(function(result) {
    console.log(result);
    return "Rafikul Third";
})
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log("Error", error);
});