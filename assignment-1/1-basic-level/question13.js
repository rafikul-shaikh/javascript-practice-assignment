// q.13) Write a program to simulate login using a callback,
// where if username matches “admin”, it prints “Login Success”, else “Login Failed”.

function login(username, callback) {
  console.log("Checking username...");

  setTimeout(() => {
    if (username === "admin") {
      callback("Login Success");
    } else {
      callback("Login Failed");
    }
  }, 1000); // simulating async delay
}

login("admin", function (message) {
  console.log(message);
});

login("guest", function (message) {
  console.log(message);
});
