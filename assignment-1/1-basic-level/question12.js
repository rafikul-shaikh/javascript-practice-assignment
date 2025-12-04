// Q.12) Implement nested callbacks to print “Step 1”, “Step 2”, “Step 3” with increasing delays.

function stepOne(callback) {
  setTimeout(() => {
    console.log("Step 1");
    callback();
  }, 1000); 
}

function stepTwo(callback) {
  setTimeout(() => {
    console.log("Step 2");
    callback();
  }, 2000); 
}

function stepThree() {
  setTimeout(() => {
    console.log("Step 3");
  }, 3000); 
}

// Nested callbacks
stepOne(() => {
  stepTwo(() => {
    stepThree();
  });
});
