// Q.3)  Create a function that simulates reading a file with setTimeout 
// and passes the file content to a callback.

function readFileSimulation(filename, callback) {
  console.log(`Reading file: ${filename}...`);

  setTimeout(() => {
    const fileContent = "This is the file content.";
    callback(fileContent);
  }, 2000); // simulating delay of 2 seconds
}

// Calling the function:
readFileSimulation("data.txt", function(content) {
  console.log("File Content Received:", content);
});
