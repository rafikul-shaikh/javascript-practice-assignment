/*
Q.17) Write a program that simulates chaining asynchronous tasks 
with different delays (e.g., fetch → process → save).

Example: Simulating tasks for Rafikul
*/

// Utility function to simulate delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Step 1: Fetch Data
async function fetchData(name) {
    console.log(`Fetching data for ${name}...`);
    await delay(2000); // 2 seconds delay
    return { user: name, data: "Raw Data" };
}

// Step 2: Process Data
async function processData(response) {
    console.log(`Processing data for ${response.user}...`);
    await delay(1500); // 1.5 seconds delay
    return { ...response, data: "Processed Data" };
}

// Step 3: Save Data
async function saveData(response) {
    console.log(`Saving data for ${response.user}...`);
    await delay(1000); // 1 second delay
    return `Data successfully saved for ${response.user}`;
}

// Chaining the asynchronous tasks
async function runTasks() {
    try {
        const fetched = await fetchData("Rafikul");
        const processed = await processData(fetched);
        const saved = await saveData(processed);

        console.log(saved);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

// Execute
runTasks();