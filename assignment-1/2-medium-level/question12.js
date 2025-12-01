// Q.12) Create a function that simulates fetching student marks 
// and then calculates the grade using callbacks.

// Function to simulate fetching marks (asynchronous)
function fetchMarks(callback) {
    console.log("Fetching student marks...");

    setTimeout(() => {
        const marks = 78; // Simulated marks
        callback(marks);
    }, 2000);
}

// Function to calculate grade
function calculateGrade(marks, callback) {
    let grade = "";

    if (marks >= 90) grade = "A+";
    else if (marks >= 80) grade = "A";
    else if (marks >= 70) grade = "B";
    else if (marks >= 60) grade = "C";
    else grade = "D";

    callback(grade);
}

// Calling the functions using callbacks
fetchMarks((marks) => {
    console.log("Marks received:", marks);

    calculateGrade(marks, (grade) => {
        console.log("Final Grade:", grade);
    });
});
