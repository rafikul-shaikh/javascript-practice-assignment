// Q.12) Implement an async function that checks if a number is prime and resolves true or false

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function isPrime(number) {

    await delay(1000);

    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Using the function

async function main() {

    const result1 = await isPrime(7);
    console.log("Is 7 prime for Rafikul:", result1);

    const result2 = await isPrime(10);
    console.log("Is 10 prime for Rafikul:", result2);

}

main();