// Q.6) Write a Promise that simulates checking if a user is logged in (resolve true/false).

function checkUserLoggedIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulating login check (random true/false)
            const isLoggedIn = Math.random() > 0.5;
            resolve(isLoggedIn);
        }, 1000); // Simulate 1 second delay
    });
}

// Example usage:
checkUserLoggedIn()
    .then((status) => {
        if (status) {
            console.log("User is logged in");
        } else {
            console.log("User is not logged in");
        }
    });