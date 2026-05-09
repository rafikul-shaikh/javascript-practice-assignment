// Q.8) Implement function to fetch multiple values and print them in order even if executed in parallel

function fetchValue(value, delayTime) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(value);
        }, delayTime);
    });
}

async function fetchAllValues() {

    // execute all tasks in parallel
    const promises = [
        fetchValue("First value for Rafikul", 3000),
        fetchValue("Second value for Rafikul", 1000),
        fetchValue("Third value for Rafikul", 2000)
    ];

    // wait for all results
    const results = await Promise.all(promises);

    // print in correct order
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
}

// Calling the function

fetchAllValues();