// Q.5) Chain three Promises to simulate: “Login → Fetch Data → Show Dashboard”.

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User logged in");
            resolve("Login Success");
        }, 1000);
    });
}

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve("User Data");
        }, 1000);
    });
}

function showDashboard() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Dashboard displayed");
            resolve("Dashboard Ready");
        }, 1000);
    });
}

// Chaining Promises
login()
    .then(() => fetchData())
    .then(() => showDashboard())
    .then(() => {
        console.log("All processes completed");
    })
    .catch((error) => {
        console.log("Error:", error);
    });