// Q.4) Implement a simulation of an online food delivery process:
// selectFood → placeOrder → cookFood → deliverFood using callbacks.

// Step 1: Select food
function selectFood(callback) {
    console.log("Selecting food...");

    setTimeout(() => {
        const food = "Biriyani";
        console.log("Food selected:", food);
        callback(food);
    }, 1000);
}

// Step 2: Place order
function placeOrder(food, callback) {
    console.log("Placing order for:", food);

    setTimeout(() => {
        const orderId = Math.floor(Math.random() * 1000);
        console.log("Order placed. Order ID:", orderId);
        callback(orderId);
    }, 1500);
}

// Step 3: Cook food
function cookFood(orderId, callback) {
    console.log("Cooking food for Order ID:", orderId);

    setTimeout(() => {
        console.log("Food cooked!");
        callback("Cooked");
    }, 2000);
}

// Step 4: Deliver food
function deliverFood(status, callback) {
    console.log("Delivering food...");

    setTimeout(() => {
        console.log("Food delivered successfully!");
        callback("Delivered");
    }, 1500);
}

// Calling all steps using callback chaining
selectFood((food) => {
    placeOrder(food, (orderId) => {
        cookFood(orderId, (status) => {
            deliverFood(status, (finalStatus) => {
                console.log("Final Status:", finalStatus);
            });
        });
    });
});

/* OutPut-
Selecting food...
Food selected: Biriyani
Placing order for: Biriyani
Order placed. Order ID: 523
Cooking food for Order ID: 523
Food cooked!
Delivering food...
Food delivered successfully!
Final Status: Delivered */
