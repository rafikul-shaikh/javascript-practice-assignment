// Q.9) Implement a function that delays execution of another function by 1 second.

function delayExecution(callback) {
  setTimeout(() => {
    callback();
  }, 1000); // 1 second
}

// Example usage:
delayExecution(() => {
  console.log("Executed after 1 second!");
});
