/*
Q.2) Create a Promise that rejects with “Network Error”
and handle it with .catch().
*/

// Create Promise
const networkPromise = new Promise((resolve, reject) => {
    
    // Simulating network failure
    reject("Network Error");

});

// Handle Promise
networkPromise
    .then((response) => {
        console.log("Success:", response);
    })
    .catch((error) => {
        console.log("Error caught:", error);
    });