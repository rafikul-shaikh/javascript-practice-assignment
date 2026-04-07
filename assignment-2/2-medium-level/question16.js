// Q.16 Demonstrate difference of Promise.all and Promise.race with code

function task1() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul Task 1 completed");
        }, 1000);
    });
}

function task2() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul Task 2 completed");
        }, 2000);
    });
}

function task3() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul Task 3 completed");
        }, 3000);
    });
}

// Using Promise.all

Promise.all([task1(), task2(), task3()])
    .then(function(results) {
        console.log("Promise.all results", results);
    })
    .catch(function(error) {
        console.log("Error in Promise.all", error);
    });

// Using Promise.race

Promise.race([task1(), task2(), task3()])
    .then(function(result) {
        console.log("Promise.race result", result);
    })
    .catch(function(error) {
        console.log("Error in Promise.race", error);
    });