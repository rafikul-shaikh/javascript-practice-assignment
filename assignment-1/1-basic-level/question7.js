// Q.7) Implement an error-first callback function that either 
// returns “Success” or an error “Something went wrong”.

function doTask(callback) {
  const isSuccess = Math.random() > 0.5; // randomly true/false

  if (isSuccess) {
    // error-first callback → first param = error, second = success result
    callback(null, "Success");
  } else {
    callback("Something went wrong", null);
  }
}

// calling the function
doTask((error, result) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Result:", result);
  }
});
