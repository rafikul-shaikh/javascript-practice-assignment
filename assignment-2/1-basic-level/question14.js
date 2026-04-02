// Q.14 Write a Promise based function to check if a number is prime


function checkPrime(n) {
    return new Promise(function(resolve, reject) {

        if (n <= 1) {
            reject("Rafikul Not a prime number");
            return;
        }

        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            resolve("Rafikul " + n + " is a prime number");
        } else {
            reject("Rafikul " + n + " is NOT a prime number");
        }
    });
}

// Example usage

checkPrime(7)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

// Try with non prime

checkPrime(8)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });