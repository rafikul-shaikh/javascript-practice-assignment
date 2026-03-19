// Q.7) Use Promise.all() to fetch ["user", "posts", "comments"] together and log them.


function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Rafikul's User Data");
        }, 1000);
    });
}

function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Rafikul's Posts ");
        }, 1500);
    });
}

function fetchComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Rafikul's Comments");
        }, 2000);
    });
}

// Using Promise.all()

Promise.all([fetchUser(), fetchPosts(), fetchComments()])
    .then((results) => {
        const [user, posts, comments] = results;

        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
    })
    .catch((error) => {
        console.log("Error:", error);
    });