// Q.5 Implement infinite loop with async await that retries until random number is greater than 8

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function retryUntilSuccess() {

    while (true) {

        // wait 1 second before each attempt
        await delay(1000);

        const randomNumber = Math.floor(Math.random() * 10);

        console.log("Rafikul generated:", randomNumber);

        if (randomNumber > 8) {

            console.log("Success for Rafikul with number:", randomNumber);

            break;
        }

        console.log("Retrying for Rafikul...");
    }
}

// Calling the function

retryUntilSuccess();