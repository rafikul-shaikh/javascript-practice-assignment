// Q.1 Implement async function that runs steps Validate Process Save Respond sequentially

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function validate() {
    await delay(1000);
    return "Validate step completed for Rafikul";
}

async function process() {
    await delay(1000);
    return "Process step completed for Rafikul";
}

async function save() {
    await delay(1000);
    return "Save step completed for Rafikul";
}

async function respond() {
    await delay(1000);
    return "Response sent for Rafikul";
}

async function runFlow() {
    const step1 = await validate();
    console.log(step1);

    const step2 = await process();
    console.log(step2);

    const step3 = await save();
    console.log(step3);

    const step4 = await respond();
    console.log(step4);
}

// Calling the function

runFlow();