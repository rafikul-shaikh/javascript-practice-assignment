// q.20) Write a program that demonstrates the issue of callback hell and 
// then refactor it slightly to make it cleaner using named functions.

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completed");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 1000);
}

// Callback Hell (Nested structure)
task1(function () {
    task2(function () {
        task3(function () {
            console.log("All tasks completed");
        });
    });
});