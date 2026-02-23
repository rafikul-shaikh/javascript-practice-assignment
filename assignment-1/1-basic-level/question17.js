// Q.17) Write a program where you simulate fetching 2 users, 
// one after another, using callbacks.

function fetchUser(userId, callback) {
    setTimeout(() => {
        console.log(`User ${userId} fetched`);
        callback();
    }, 1000);
}

// Fetching users one after another (Callback chaining)
fetchUser(1, () => {
    fetchUser(2, () => {
        console.log("Both users fetched successfully");
    });
});