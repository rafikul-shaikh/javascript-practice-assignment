// Q.10 Implement Promise.any with three tasks where only the fastest success is used


function task1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("Rafikul task 1 failed");
        }, 2000);
    });
}

function task2() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul task 2 success");
        }, 1500);
    });
}

function task3() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul task 3 success");
        }, 3000);
    });
}

Promise.any([task1(), task2(), task3()])
    .then(function(result) {
        console.log("First Success:", result);
    })
    .catch(function(error) {
        console.log("All failed:", error);
    });