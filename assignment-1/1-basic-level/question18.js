// Q.18) Implement a timer function that counts down from 5 to 0 with 1-second delay.

function startTimer() {
    let count = 5;

    const timer = setInterval(() => {
        console.log(count);
        count--;

        if (count < 0) {
            clearInterval(timer);
            console.log("Timer Finished!");
        }
    }, 1000); // 1000 milliseconds = 1 second
}

startTimer();