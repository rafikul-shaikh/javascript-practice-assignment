// Q.3) Write a program to print “Start”, then schedule “Task A” after 2 seconds,
// “Task B” after 1 second, and ensure “End” is printed immediately.

console.log("Start");

setTimeout(() => {
  console.log("Task A");
}, 2000); 

setTimeout(() => {
  console.log("Task B");
}, 1000); 
console.log("End");
