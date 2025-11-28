// Q.8) Write a program that prints “A”, “B”, “C” in order, 
// but “C” should be printed using setTimeout.

console.log("A");
console.log("B");

setTimeout(() => {
  console.log("C");
}, 0); // delay 0ms but still asynchronous
