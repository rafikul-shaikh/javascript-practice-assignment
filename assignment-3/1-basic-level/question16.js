// Q.16 Write an async function that returns reversed string of given input after 1 second delay

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function reverseProfileName(profileName) {

    // wait for 1 second
    await delay(1000);

    // reverse the string
    const reversedName = profileName.split("").reverse().join("");

    return reversedName;
}

// Using the function

async function main() {

    const userName = "Rafikul";

    const result = await reverseProfileName(userName);

    console.log("Reversed profile name for Rafikul:", result);

}

main();