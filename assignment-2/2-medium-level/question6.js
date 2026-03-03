// Q.6) Write a function that uses Promises to fetch two numbers sequentially and return their sum.

function fetchNumber1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched Number 1");
            resolve(10);
        }, 1000);
    });
}

function fetchNumber2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched Number 2");
            resolve(20);
        }, 1000);
    });
}

function getSumSequentially() {
    return fetchNumber1()
        .then((num1) => {
            return fetchNumber2()
                .then((num2) => {
                    return num1 + num2;
                });
        });
}

// Example usage:
getSumSequentially()
    .then((sum) => {
        console.log("Final Sum:", sum);
    })
    .catch((error) => {
        console.log("Error:", error);
    });