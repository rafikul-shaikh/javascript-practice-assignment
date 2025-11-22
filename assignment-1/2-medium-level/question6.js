/* 
Q6: Implement a function that simulates downloading multiple files sequentially using callbacks.
    (Use your own name as an example inside the program)
*/

function downloadFile(fileName, userName, callback) {
  console.log(`${userName} started downloading: ${fileName}`);

  setTimeout(() => {
    console.log(`${userName} finished downloading: ${fileName}`);
    callback(); // continue to next file
  }, 1000); 
}

function downloadAllFiles() {
  const user = "Rafikul"; // your name

  downloadFile("File1", user, () => {
    downloadFile("File2", user, () => {
      downloadFile("File3", user, () => {
        downloadFile("File4", user, () => {
          console.log(`All files downloaded successfully by ${user}.`);
        });
      });
    });
  });
}

downloadAllFiles();
