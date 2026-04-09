// Q.1 Write an async function that waits 2 seconds using setTimeout and then logs Hello Async

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function sayHello() {
    await delay(2000);
    console.log("Hello Async from Rafikul");
}

// Calling the async function

sayHello();