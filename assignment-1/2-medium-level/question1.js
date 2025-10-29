function fakeApiCall(callback) {
  console.log("Fetching data from API...");

  // Simulate network delay using setTimeout
  setTimeout(() => {
    const success = Math.random() > 0.5; // 50% chance of success

    if (success) {
      // First parameter = null (no error)
      callback(null, { message: "Data fetched successfully!" });
    } else {
      // First parameter = error
      callback("Error: Failed to fetch data", null);
    }
  }, 2000);
}

// Calling the function
fakeApiCall((error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.message);
  }
});
