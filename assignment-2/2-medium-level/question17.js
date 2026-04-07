// Q.17 Simulate API call with a Promise that resolves User Fetched after 2 seconds

function fetchUser() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul User Fetched");
        }, 2000);
    });
}

// Using the Promise

fetchUser()
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log("Error", error);
    });