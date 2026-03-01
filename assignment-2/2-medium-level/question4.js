// Q.4) Simulate fetching user details ({id:1, name:"Sarthak"}) with a Promise.

function fetchUserDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: 1,
                name: "Sarthak"
            };

            resolve(user); // Simulating successful data fetch
        }, 1000); // 1 second delay to simulate async operation
    });
}

// Example usage:
fetchUserDetails()
    .then((user) => {
        console.log("User Details:", user);
    })
    .catch((error) => {
        console.error("Error:", error);
    });