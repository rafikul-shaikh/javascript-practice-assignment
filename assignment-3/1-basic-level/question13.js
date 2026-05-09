// Q.13) Write an async function that simulates coin toss and resolves Heads or Tails

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function tossCoin() {

    await delay(1000);

    const result = Math.random() < 0.5 ? "Heads" : "Tails";

    return result;
}

// Using the function

async function main() {

    const result = await tossCoin();

    console.log("Coin toss result for Rafikul:", result);

}

main();