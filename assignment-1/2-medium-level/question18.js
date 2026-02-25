/*
Q.18) Implement a function that calls three APIs one after another,
where each API returns data after 1 second.
*/

// Simulated API 1
function api1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("API 1 response received");
            resolve("Data from API 1");
        }, 1000);
    });
}

// Simulated API 2
function api2(previousData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("API 2 response received");
            resolve(previousData + " -> Data from API 2");
        }, 1000);
    });
}

// Simulated API 3
function api3(previousData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("API 3 response received");
            resolve(previousData + " -> Data from API 3");
        }, 1000);
    });
}

// Function to call APIs sequentially
async function callApisSequentially() {
    try {
        const result1 = await api1();
        const result2 = await api2(result1);
        const result3 = await api3(result2);

        console.log("Final Result:", result3);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Execute function
callApisSequentially();