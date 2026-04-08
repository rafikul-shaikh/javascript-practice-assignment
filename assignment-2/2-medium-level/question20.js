// Q.20 Refactor a callback hell example login getData showData into Promises

// Step 1 Callback Hell version

function login(callback) {
    setTimeout(function() {
        console.log("Rafikul Logged in");
        callback();
    }, 1000);
}

function getData(callback) {
    setTimeout(function() {
        console.log("Rafikul Data fetched");
        callback();
    }, 1000);
}

function showData() {
    setTimeout(function() {
        console.log("Rafikul Data displayed");
    }, 1000);
}

// Callback hell

login(function() {
    getData(function() {
        showData();
    });
});


// Step 2 Promise version

function loginPromise() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Rafikul Logged in");
            resolve();
        }, 1000);
    });
}

function getDataPromise() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Rafikul Data fetched");
            resolve();
        }, 1000);
    });
}

function showDataPromise() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Rafikul Data displayed");
            resolve();
        }, 1000);
    });
}

// Promise chaining

loginPromise()
    .then(function() {
        return getDataPromise();
    })
    .then(function() {
        return showDataPromise();
    })
    .catch(function(error) {
        console.log("Error", error);
    });