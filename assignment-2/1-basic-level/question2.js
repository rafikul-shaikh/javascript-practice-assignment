/*
Q.2) Write a Promise that rejects after 2 seconds 
with “Error: Timeout” and handle it.
*/

// Create Promise
const timeoutPromise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        reject("Error: Timeout");
    }, 2000);

});

// Handle Promise
timeoutPromise
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Caught:", error);
    });