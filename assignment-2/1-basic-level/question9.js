// Q.9) Write a function getEvenNumber(n) that returns a Promise 
// which resolves if n is even, rejects otherwise.

function getEvenNumber(n) {
    return new Promise((resolve, reject) => {
        if (n % 2 === 0) {
            resolve(`Rafikul, ${n} is an even number`);
        } else {
            reject(`Rafikul, ${n} is NOT an even number`);
        }
    });
}

// Example usage:

getEvenNumber(10)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Try with odd number

getEvenNumber(7)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });