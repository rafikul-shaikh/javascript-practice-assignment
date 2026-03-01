// Q.3) Implement a function delay(ms) that returns a Promise resolving after ms milliseconds.

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// Example usage:
console.log("Start");

delay(2000).then(() => {
    console.log("Resolved after 2 seconds");
});

console.log("End");