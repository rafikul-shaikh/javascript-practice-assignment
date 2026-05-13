// Q.14 Create an async function that waits for 3 API calls sequentially and logs result one by one

function fakeAPI(apiName, delayTime) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(apiName + " response for Rafikul");
        }, delayTime);
    });
}

async function fetchAPIs() {

    const result1 = await fakeAPI("API 1", 1000);
    console.log(result1);

    const result2 = await fakeAPI("API 2", 1000);
    console.log(result2);

    const result3 = await fakeAPI("API 3", 1000);
    console.log(result3);

}

// Calling the function

fetchAPIs();