// Q.2 Create an async function that returns Resolved Value and log it using await

async function getValue() {
    return "Resolved Value for Rafikul";
}

async function main() {
    const result = await getValue();
    console.log(result);
}

// Calling the function

main();