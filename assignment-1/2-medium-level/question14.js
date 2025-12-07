// Q.14) Write a program that demonstrates the non-blocking nature of JavaScript 
// by printing async and sync messages together.

console.log("1. Synchronous message: Start");

setTimeout(() => {
  console.log("3. Asynchronous message: Inside setTimeout");
}, 0);

console.log("2. Synchronous message: End");
