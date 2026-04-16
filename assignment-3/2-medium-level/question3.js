// Q.3 Implement a function that uses try catch finally where finally always logs Process Ended

function processTask(value) {
    try {
        if (!value) {
            throw new Error("Something went wrong for Rafikul");
        }

        console.log("Processing value for Rafikul:", value);
    } catch (error) {
        console.log("Caught:", error.message);
    } finally {
        console.log("Process Ended");
    }
}

// Example usage

processTask("Data");
processTask(null);