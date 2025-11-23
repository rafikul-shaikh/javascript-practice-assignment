// Q.7) Create a function that accepts two callbacks: one for success and one for error, 
// and randomly executes one of them.

function randomTask(successCallback, errorCallback) {
  const isSuccess = Math.random() > 0.5; // randomly true or false

  if (isSuccess) {
    successCallback("Operation was successful!");
  } else {
    errorCallback("Something went wrong!");
  }
}

// Usage:
randomTask(
  (message) => console.log("SUCCESS:", message),
  (error) => console.log("ERROR:", error)
);
