// Q.13) Implement a program that simulates checking a user’s subscription status 
// using a callback with success/failure messages.

// Function to simulate checking subscription
function checkSubscription(userId, callback) {
    console.log("Checking subscription for user:", userId);

    setTimeout(() => {
        // Simulated subscription database
        const subscribedUsers = [101, 102, 105, 110];

        if (subscribedUsers.includes(userId)) {
            callback(null, "Subscription Active ✔️");
        } else {
            callback("Subscription Not Found ❌", null);
        }
    }, 2000);
}

// Using the callback
checkSubscription(105, (error, successMessage) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Success:", successMessage);
    }
});
