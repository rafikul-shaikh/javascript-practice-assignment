// Q.1 Convert a callback based function into async await version

// Step 1 Callback based function

function fetchDataCallback(callback) {
    setTimeout(function() {
        callback(null, "Data fetched for Rafikul");
    }, 1000);
}

// Step 2 Convert to Promise

function fetchDataPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Data fetched for Rafikul");
        }, 1000);
    });
}

// Step 3 Async await version

async function fetchDataAsync() {
    try {
        const result = await fetchDataPromise();
        console.log(result);
    } catch (error) {
        console.log("Error", error);
    }
}

// Calling async function

fetchDataAsync();