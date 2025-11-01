
// Q.3) Implement a callback function that takes two numbers and prints their sum after 1 second.

function addNumbers(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 1000);
}

// Example usage:
addNumbers(5, 7, (result) => {
  console.log("Sum after 1 second:", result);
});
