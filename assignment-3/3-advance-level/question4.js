// Q.4 Execute 5 async tasks in parallel but handle errors individually for each task

function createTask(taskName, shouldFail, delayTime) {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            if (shouldFail) {
                reject(taskName + " failed for Rafikul");
            } else {
                resolve(taskName + " completed for Rafikul");
            }

        }, delayTime);

    });
}

async function runTasks() {

    const tasks = [
        createTask("Task 1", false, 1000),
        createTask("Task 2", true, 1500),
        createTask("Task 3", false, 1200),
        createTask("Task 4", true, 1800),
        createTask("Task 5", false, 1000)
    ];

    const results = await Promise.allSettled(tasks);

    results.forEach(function(result, index) {

        if (result.status === "fulfilled") {
            console.log("Success:", result.value);
        } else {
            console.log("Error:", result.reason);
        }

    });
}

// Calling the function

runTasks();