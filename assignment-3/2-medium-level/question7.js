// Q.7 Write an async function that executes three awaited operations inside a single try catch

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function operation1() {
    await delay(1000);
    return "Operation 1 completed for Rafikul";
}

async function operation2() {
    await delay(1000);
    return "Operation 2 completed for Rafikul";
}

async function operation3() {
    await delay(1000);
    return "Operation 3 completed for Rafikul";
}

async function runOperations() {

    try {

        const result1 = await operation1();
        console.log(result1);

        const result2 = await operation2();
        console.log(result2);

        const result3 = await operation3();
        console.log(result3);

    } catch (error) {

        console.log("Error occurred for Rafikul:", error.message);

    }
}

// Calling the function

runOperations();