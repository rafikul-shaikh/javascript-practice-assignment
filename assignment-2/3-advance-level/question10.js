// Q.10 Simulate a backend flow using Promises Read File Transform Data Save Result

function readFile() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul raw file data");
        }, 1000);
    });
}

function transformData(data) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(data.toUpperCase());
        }, 1000);
    });
}

function saveResult(data) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul data saved " + data);
        }, 1000);
    });
}

// Promise chain

readFile()
    .then(function(fileData) {
        console.log("Read:", fileData);
        return transformData(fileData);
    })
    .then(function(transformedData) {
        console.log("Transformed:", transformedData);
        return saveResult(transformedData);
    })
    .then(function(result) {
        console.log("Final:", result);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });