// Q.6) Create a function fetchUser(callback) that returns a mock user object 
// {name: "Sarthak"} after 2 seconds using a callback.

function fetchUser(callback) {
    console.log("Fetching user...");

    setTimeout(() => {
        const user = { name: "Sarthak" };  // mock user object
        callback(user);  // returning user through callback
    }, 2000);
}

function handleUser(user) {
    console.log("User fetched:", user);
}

// calling the function
fetchUser(handleUser);
