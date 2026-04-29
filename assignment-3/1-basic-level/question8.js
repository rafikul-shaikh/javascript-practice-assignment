// Q.8 Implement an async function that waits for a random delay 1 to 3 seconds before resolving

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function randomDelayTask() {
    // generate random delay between 1 to 3 seconds
    const randomTime = Math.floor(Math.random() * 2000) + 1000;

    console.log("Waiting for", randomTime, "milliseconds");

    await delay(randomTime);

    return "Task completed for Rafikul after random delay";
}

// Using the function

async function main() {
    const result = await randomDelayTask();
    console.log(result);
}

main();