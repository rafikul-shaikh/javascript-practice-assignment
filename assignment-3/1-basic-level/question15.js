// Q.15 Implement a function that takes an array of numbers and resolves with sum using async await

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function calculateTotalMarks(numbers) {

    // simulate async processing
    await delay(1000);

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Using the function

async function main() {

    const marks = [85, 90, 78, 88];

    const totalMarks = await calculateTotalMarks(marks);

    console.log("Total marks scored by Rafikul:", totalMarks);

}

main();