// Q.9) Implement a function that delays execution of another function by 1 second.

function delayExecution(callback) {
  setTimeout(() => {
    callback();
  }, 1000); // 1000 ms = 1 second
}

// Test
delayExecution(() => {
  console.log("Executed after 1 second");
});
