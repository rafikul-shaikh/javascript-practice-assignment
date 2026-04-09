// Q.3 Write an async function that rejects with Something went wrong and handle it with try catch

async function throwError() {
    throw new Error("Something went wrong for Rafikul");
}

async function main() {
    try {
        const result = await throwError();
        console.log(result);
    } catch (error) {
        console.log("Caught:", error.message);
    }
}

// Calling the function

main();