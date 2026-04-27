// Q.6 Create a function that fetches two numbers asynchronously and returns their sum

function getNumber1() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(10);
        }, 1000);
    });
}

function getNumber2() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(20);
        }, 1500);
    });
}

async function getSum() {
    const num1 = await getNumber1();
    const num2 = await getNumber2();

    return num1 + num2;
}

// Using the function

async function main() {
    const sum = await getSum();
    console.log("Sum calculated for Rafikul is", sum);
}

main();