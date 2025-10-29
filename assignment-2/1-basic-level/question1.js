
// Q.1) Create a Promise that resolves with “Hello World” after 1 second and log it.


const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 1000); // 1 second delay
});

myPromise.then((message) => {
  console.log(message);
});
