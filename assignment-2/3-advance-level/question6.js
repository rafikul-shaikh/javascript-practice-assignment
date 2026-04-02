// Q.6 Simulate fetching 3 APIs concurrently with Promise.all and then merge results into one object

function fetchUser() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({ name: "Rafikul", age: 24 });
        }, 1000);
    });
}

function fetchPosts() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({ posts: ["Post1", "Post2"] });
        }, 1500);
    });
}

function fetchComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({ comments: ["Comment1", "Comment2"] });
        }, 2000);
    });
}

Promise.all([fetchUser(), fetchPosts(), fetchComments()])
    .then(function(results) {
        const user = results[0];
        const posts = results[1];
        const comments = results[2];

        // merge into one object
        const mergedResult = Object.assign({}, user, posts, comments);

        console.log("Merged Result:", mergedResult);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });