// Q.10 Create an async timer that prints Tick 1 Tick 2 Tick 3 with 1 second gaps

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function startTimer() {

    await delay(1000);
    console.log("Tick 1 for Rafikul");

    await delay(1000);
    console.log("Tick 2 for Rafikul");

    await delay(1000);
    console.log("Tick 3 for Rafikul");

}

// Calling the function

startTimer();