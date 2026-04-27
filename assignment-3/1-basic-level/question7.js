// Q.7 Write an async function that loops through 1 2 3 4 and logs squares with delay

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function logSquares() {
    const numbers = [1, 2, 3, 4];

    for (let i = 0; i < numbers.length; i++) {
        await delay(1000);
        const square = numbers[i] * numbers[i];
        console.log("Square for Rafikul:", square);
    }
}

// Calling the function

logSquares();