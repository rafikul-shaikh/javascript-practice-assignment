// Q.4 Create async function to fetch posts for a user after fetching user ID chained calls

function fetchUser() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({ id: 101, name: "Rafikul" });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 1000);
    });
}

async function getUserPosts() {
    const user = await fetchUser();
    console.log("User fetched:", user.name);

    const posts = await fetchPosts(user.id);
    console.log("Posts for", user.name + ":", posts);
}

// Calling the function

getUserPosts();