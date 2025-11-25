
// Q.10) Implement a function that simulates order processing steps:
// “Order Placed” → “Packed” → “Shipped” → “Delivered” using callbacks.

function placeOrder(callback) {
    console.log("Step 1: Order Placed");
    setTimeout(() => {
        callback();
    }, 1000);
}

function packOrder(callback) {
    console.log("Step 2: Packed");
    setTimeout(() => {
        callback();
    }, 1000);
}

function shipOrder(callback) {
    console.log("Step 3: Shipped");
    setTimeout(() => {
        callback();
    }, 1000);
}

function deliverOrder() {
    console.log("Step 4: Delivered");
}

// Calling all steps using callbacks
placeOrder(() => {
    packOrder(() => {
        shipOrder(() => {
            deliverOrder();
        });
    });
});
