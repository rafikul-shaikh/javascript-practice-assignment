// Q.4) Implement a function doTask(taskName, delay, callback)
//      that executes multiple tasks in sequence using callbacks.

function doTask(taskName, delay, callback) {
  setTimeout(() => {
    console.log(`${taskName} completed`);
    if (callback) callback();
  }, delay);
}

// Running tasks in sequence
doTask("Task 1", 1000, () => {
  doTask("Task 2", 1500, () => {
    doTask("Task 3", 2000, () => {
      console.log("All tasks finished!");
    });
  });
});
