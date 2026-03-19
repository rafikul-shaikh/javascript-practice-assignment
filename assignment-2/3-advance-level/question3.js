// Q.3 Write a function runAny tasks that returns Promise.any result of multiple async tasks

function runAny(tasks) {
    return Promise.any(tasks);
}

function task1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("Rafikul task 1 failed");
        }, 1000);
    });
}

function task2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Rafikul task 2 success");
        }, 1500);
    });
}

function task3() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("Rafikul task 3 failed");
        }, 500);
    });
}

runAny([task1(), task2(), task3()])
    .then(function(result) {
        console.log("Result:", result);
    })
    .catch(function(error) {
        console.log("All tasks failed:", error);
    });