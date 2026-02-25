// Q.20) Implement a simple retry mechanism where a function runs again if the
//  first attempt fails (simulate with a random error).



function unstableFunction() {
    return new Promise((resolve, reject) => {
        const random = Math.random();

        console.log("Trying...");

        if (random < 0.5) {
            reject("Random Error Occurred");
        } else {
            resolve("✅ Success!");
        }
    });
}

// Retry mechanism
async function retry(fn, retries) {
    for (let i = 0; i <= retries; i++) {
        try {
            const result = await fn();
            return result;
        } catch (error) {
            console.log(`Attempt ${i + 1} failed.`);

            if (i === retries) {
                throw new Error("All retry attempts failed.");
            }
        }
    }
}

// Calling retry function
retry(unstableFunction, 3)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));