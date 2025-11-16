// Q.2) Implement a file uploader simulation where multiple files 
//    are uploaded sequentially using callbacks.
//
// Code written by: RAFIKUL SHAIKH 


// Simulates uploading a single file
function uploadFileByRafikul(fileName, callback) {
  console.log(`Rafikul started uploading: ${fileName}...`);

  // Random upload time (1–3 seconds)
  const uploadTime = Math.floor(Math.random() * 2000) + 1000;

  setTimeout(() => {
    console.log(`Rafikul uploaded: ${fileName}`);
    callback(); // move to next file
  }, uploadTime);
}

// Function to upload multiple files in sequence
function uploadFilesSequentiallyByRafikul(files, index = 0) {
  if (index === files.length) {
    console.log("All files uploaded successfully by Rafikul! 🎉");
    return;
  }

  uploadFileByRafikul(files[index], () => {
    uploadFilesSequentiallyByRafikul(files, index + 1);
  });
}

// List of files to upload
const filesToUpload = [
  "photo.png",
  "video.mp4",
  "document.pdf",
  "music.mp3",
];

// Start uploading (by Rafikul)
uploadFilesSequentiallyByRafikul(filesToUpload);
