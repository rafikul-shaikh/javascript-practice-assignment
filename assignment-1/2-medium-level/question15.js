// Q.15) Simulate a bank transaction: 
// “Validating User” → “Checking Balance” → “Transaction Successful” using callbacks.

function validateUser(callback) {
    setTimeout(() => {
        console.log("Validating User...");
        callback();
    }, 1000);
}

function checkBalance(callback) {
    setTimeout(() => {
        console.log("Checking Balance...");
        callback();
    }, 1000);
}

function transactionSuccessful() {
    setTimeout(() => {
        console.log("Transaction Successful");
    }, 1000);
}

// Callback Hell Structure
validateUser(() => {
    checkBalance(() => {
        transactionSuccessful();
    });
});