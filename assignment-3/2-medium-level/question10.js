// Q.10 Write async function that processes task1 task2 task3 sequentially

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function processTask(taskName) {

    await delay(1000);

    console.log(taskName + " completed for Rafikul");
}

async function processAllTasks() {

    const tasks = ["task1", "task2", "task3"];

    for (let i = 0; i < tasks.length; i++) {

        await processTask(tasks[i]);

    }
}

// Calling the function

processAllTasks();