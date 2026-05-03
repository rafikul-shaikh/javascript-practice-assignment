// Q.3 Simulate async database transaction where if one step fails rollback everything

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function debitAmount() {
    await delay(1000);
    console.log("Amount debited for Rafikul");
}

async function creditAmount() {
    await delay(1000);

    // simulate failure
    throw new Error("Credit failed");

    // console.log("Amount credited");
}

async function rollbackTransaction() {
    await delay(1000);
    console.log("Rollback completed for Rafikul");
}

async function processTransaction() {

    try {
        await debitAmount();
        await creditAmount();

        console.log("Transaction successful for Rafikul");

    } catch (error) {

        console.log("Transaction failed:", error.message);

        await rollbackTransaction();
    }
}

// Calling the function

processTransaction();