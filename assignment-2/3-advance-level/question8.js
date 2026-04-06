// Q.8 Take a callback based file reader simulation and refactor into Promises

// Step 1 Callback based version

function readFileCallback(filename, callback) {
    setTimeout(function() {
        if (filename) {
            callback(null, "Rafikul File data from " + filename);
        } else {
            callback("Rafikul File not found", null);
        }
    }, 1000);
}

// Using callback version

readFileCallback("data.txt", function(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});


// Step 2 Promise based version

function readFilePromise(filename) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (filename) {
                resolve("Rafikul File data from " + filename);
            } else {
                reject("Rafikul File not found");
            }
        }, 1000);
    });
}

// Using Promise version

readFilePromise("data.txt")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });