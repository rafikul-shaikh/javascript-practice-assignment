/*  
Q.5) Write a program that demonstrates callback hell by simulating 
     multiple API calls: login → fetch profile → fetch posts → show posts.
*/

function login(username, password, callback) {
  setTimeout(() => {
    console.log("User logged in");
    callback({ userId: 101, username });
  }, 1000);
}

function fetchProfile(user, callback) {
  setTimeout(() => {
    console.log("Profile fetched");
    callback({ ...user, name: "Rafikul", age: 24 });
  }, 1000);
}

function fetchPosts(profile, callback) {
  setTimeout(() => {
    console.log("Posts fetched");
    callback([
      { id: 1, title: "Post One" },
      { id: 2, title: "Post Two" }
    ]);
  }, 1000);
}

function showPosts(posts, callback) {
  setTimeout(() => {
    console.log("Showing posts:");
    console.log(posts);
    callback();
  }, 1000);
}

// CALLBACK HELL (nested callbacks)
login("rafikul", "12345", (user) => {
  fetchProfile(user, (profile) => {
    fetchPosts(profile, (posts) => {
      showPosts(posts, () => {
        console.log("All tasks completed!");
      });
    });
  });
});
