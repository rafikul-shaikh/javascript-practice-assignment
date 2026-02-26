//q.5) Write a callback hell example of fetching data from 3 APIs and then combining the results.


// Simulating API 1
function fetchUser(callback) {
    setTimeout(() => {
        console.log("Fetching user data...");
        callback({ id: 1, name: "Rafikul" });
    }, 1000);
}

// Simulating API 2
function fetchOrders(userId, callback) {
    setTimeout(() => {
        console.log("Fetching orders for user:", userId);
        callback(["Laptop", "Mobile"]);
    }, 1000);
}

// Simulating API 3
function fetchPayments(callback) {
    setTimeout(() => {
        console.log("Fetching payment details...");
        callback({ status: "Paid", method: "Credit Card" });
    }, 1000);
}


// ❌ CALLBACK HELL STARTS HERE
fetchUser(function (user) {
    fetchOrders(user.id, function (orders) {
        fetchPayments(function (payment) {
            
            // Combining all results
            const finalResult = {
                user: user,
                orders: orders,
                payment: payment
            };

            console.log("Final Combined Result:");
            console.log(finalResult);

        });
    });
});