// Q.5 Implement parallel execution of three async tasks using Promise.all with async await

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function task1() {
    await delay(1000);
    return "Task 1 done for Rafikul";
}

async function task2() {
    await delay(2000);
    return "Task 2 done for Rafikul";
}

async function task3() {
    await delay(1500);
    return "Task 3 done for Rafikul";
}

async function runParallelTasks() {
    // start all tasks together
    const results = await Promise.all([
        task1(),
        task2(),
        task3()
    ]);

    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}

// Calling the function

runParallelTasks();