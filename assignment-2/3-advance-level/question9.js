// Q.9 Combine Promise.race and Promise.all to fetch from multiple APIs with fallback

function api1() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul API 1 data");
        }, 3000);
    });
}

function api2() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul API 2 data");
        }, 1000);
    });
}

function api3() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul API 3 data");
        }, 2000);
    });
}

// Step 1 Fastest response using race

Promise.race([api1(), api2(), api3()])
    .then(function(fastest) {
        console.log("Fastest response", fastest);
    });

// Step 2 Get all data as fallback

Promise.all([api1(), api2(), api3()])
    .then(function(allResults) {
        console.log("All API data", allResults);
    })
    .catch(function(error) {
        console.log("Error", error);
    });