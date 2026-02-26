// Q.19) Create a program that simulates a chatbot that asks 3 questions in sequence using callbacks.
//give me it in java script include question inside the code 


function askQuestion(question, callback) {
    setTimeout(() => {
        console.log("Bot: " + question);

        // Simulated user response (hardcoded for demo)
        let answer;

        if (question === "What is your name?") {
            answer = "Rafikul";
        } else if (question === "How old are you?") {
            answer = "23";
        } else if (question === "What is your favorite programming language?") {
            answer = "JavaScript";
        }

        console.log("User: " + answer);
        callback();  // Call next question
    }, 1000);
}

// Start chatbot conversation
askQuestion("What is your name?", function () {
    askQuestion("How old are you?", function () {
        askQuestion("What is your favorite programming language?", function () {
            console.log("Bot: Nice talking to you!");
        });
    });
});