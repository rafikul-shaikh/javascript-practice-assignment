// Q.11 Create async function that delays for 3 seconds before returning Done using setTimeout

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function completeTask() {

    await delay(3000);

    return "Done for Rafikul";
}

// Using the function

async function main() {

    const result = await completeTask();

    console.log(result);

}

main();