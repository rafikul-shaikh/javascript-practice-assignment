
// Q.4 Write a function that prints “Task 1” immediately and “Task 2” after 2 seconds.

function printTasks() {
  console.log("Task 1");

  setTimeout(() => {
    console.log("Task 2");
  }, 2000);
}

// Example usage:
printTasks();
