// Q.16) Create a function that accepts a callback and executes it after 500ms delay.

function executeWithDelay(callback) {
    setTimeout(() => {
        callback();
    }, 500);
}

// Example usage
executeWithDelay(() => {
    console.log("This runs after 500ms");
});