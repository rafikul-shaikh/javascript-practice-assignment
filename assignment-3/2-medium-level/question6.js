// Q.6) Simulate reading file contents using async await resolve File Data after 1 second

function readFile() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("File Data for Rafikul");
        }, 1000);
    });
}

async function getFileData() {
    const data = await readFile();
    console.log(data);
}

// Calling the function

getFileData();