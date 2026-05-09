// Q.9) Refactor nested setTimeout callback hell into async await with proper sequence

// Step 1 Callback hell version

setTimeout(function() {

    console.log("Step 1 completed for Rafikul");

    setTimeout(function() {

        console.log("Step 2 completed for Rafikul");

        setTimeout(function() {

            console.log("Step 3 completed for Rafikul");

        }, 1000);

    }, 1000);

}, 1000);


// Step 2 Async await version

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function runSteps() {

    await delay(1000);
    console.log("Step 1 completed for Rafikul");

    await delay(1000);
    console.log("Step 2 completed for Rafikul");

    await delay(1000);
    console.log("Step 3 completed for Rafikul");

}

// Calling async function

runSteps();