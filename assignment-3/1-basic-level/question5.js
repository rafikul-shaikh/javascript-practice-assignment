// Q.5 Write an async function that calls another async function sequentially

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function firstTask() {
    await delay(1000);
    return "First task done for Rafikul";
}

async function secondTask() {
    await delay(1000);
    return "Second task done after first for Rafikul";
}

async function runTasks() {
    const result1 = await firstTask();
    console.log(result1);

    const result2 = await secondTask();
    console.log(result2);
}

// Calling the main function

runTasks();