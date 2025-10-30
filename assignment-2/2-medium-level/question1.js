

//   Q.1) chain two Promises where first resolves “Step 1 done”, then second resolves “Step 2 done”.

const step1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Step 1 done");
  }, 1000);
});

step1
  .then((message) => {
    console.log(message); // Output: Step 1 done
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Step 2 done");
      }, 1000);
    });
  })
  .then((message) => {
    console.log(message); // Output: Step 2 done
  });
