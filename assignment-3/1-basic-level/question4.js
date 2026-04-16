// Q.4) Implement a function waitAndSquare n that waits 1 second and returns n times n

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function waitAndSquare(n) {
    await delay(1000);
    return n * n;
}

// Using the function

async function main() {
    const result = await waitAndSquare(5);
    console.log("Square for Rafikul is", result);
}

main();