// Q.2) Use Promise.allSettled() with 5 Promises (some resolve, some reject)
// and log status of each.


const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Rafikul completed JavaScript task 1");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Rafikul failed task 2");
    }, 1500);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Rafikul completed task 3");
    }, 2000);
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Rafikul network error in task 4");
    }, 2500);
});

const promise5 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Rafikul completed task 5");
    }, 3000);
});

// Using Promise.allSettled()

Promise.allSettled([promise1, promise2, promise3, promise4, promise5])
    .then((results) => {
        results.forEach((result, index) => {
            console.log(`Promise ${index + 1} Status: ${result.status}`);
            
            if (result.status === "fulfilled") {
                console.log("Result:", result.value);
            } else {
                console.log("Error:", result.reason);
            }
            
            console.log("--------------------------");
        });
    });