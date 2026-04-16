// Q.2 Write an async function that fetches user data from a fake API and prints User Name

function fakeAPI() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({ name: "Rafikul" });
        }, 1000);
    });
}

async function getUser() {
    const user = await fakeAPI();
    console.log("User:", user.name);
}

// Calling the function

getUser();