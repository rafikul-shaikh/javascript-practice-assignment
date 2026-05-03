// Q.11) Write an async function that simulates fetching a username and returns Sarthak

function fetchUsername() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Sarthak");
        }, 1000);
    });
}

async function getUsername() {
    const username = await fetchUsername();

    console.log("Fetched username for Rafikul:", username);

    return username;
}

// Calling the function

getUsername();