
// Q.1)Simulate a backend pipeline with Promises: “Validate Input → Process Data → Save to DB → Send Response”.


function validateInput(input) {
  return new Promise((resolve, reject) => {
    console.log("Validating input...");
    setTimeout(() => {
      if (input && input.trim() !== "") {
        resolve("✅ Input validated");
      } else {
        reject("❌ Invalid input");
      }
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    console.log("Processing data...");
    setTimeout(() => {
      resolve("✅ Data processed");
    }, 1000);
  });
}

function saveToDB(processedData) {
  return new Promise((resolve) => {
    console.log("Saving to database...");
    setTimeout(() => {
      resolve("✅ Data saved to DB");
    }, 1000);
  });
}

function sendResponse() {
  return new Promise((resolve) => {
    console.log("Sending response to client...");
    setTimeout(() => {
      resolve("✅ Response sent successfully!");
    }, 1000);
  });
}

// 🔗 Promise Chain (Pipeline)
validateInput("User Data")
  .then((res) => {
    console.log(res);
    return processData(res);
  })
  .then((res) => {
    console.log(res);
    return saveToDB(res);
  })
  .then((res) => {
    console.log(res);
    return sendResponse();
  })
  .then((res) => {
    console.log(res);
    console.log("🚀 All steps completed successfully!");
  })
  .catch((err) => {
    console.error(err);
  });
