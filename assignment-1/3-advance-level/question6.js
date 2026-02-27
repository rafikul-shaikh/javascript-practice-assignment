/*
Q.6) Simulate a movie booking system with callbacks:
searchMovie → selectSeats → makePayment → confirmTicket.

*/

// Step 1: Search Movie
function searchMovie(userName, movieName, callback) {
    console.log(userName + " is searching for movie: " + movieName);

    setTimeout(() => {
        console.log("Movie found: " + movieName);
        callback(userName, movieName);
    }, 1000);
}

// Step 2: Select Seats
function selectSeats(userName, movieName, callback) {
    console.log(userName + " is selecting seats for: " + movieName);

    setTimeout(() => {
        let seats = "B5, B6";
        console.log("Seats selected by " + userName + ": " + seats);
        callback(userName, movieName, seats);
    }, 1000);
}

// Step 3: Make Payment
function makePayment(userName, movieName, seats, callback) {
    console.log(userName + " is making payment for seats: " + seats);

    setTimeout(() => {
        console.log("Payment successful for " + userName);
        callback(userName, movieName, seats);
    }, 1000);
}

// Step 4: Confirm Ticket
function confirmTicket(userName, movieName, seats) {
    console.log("🎟 Ticket Confirmed!");
    console.log("Name: " + userName);
    console.log("Movie: " + movieName);
    console.log("Seats: " + seats);
    console.log("Enjoy your movie, " + userName + "!");
}


// Callback Chain
searchMovie("Rafikul", "Avengers", function(user, movie) {
    selectSeats(user, movie, function(user, movie, seats) {
        makePayment(user, movie, seats, function(user, movie, seats) {
            confirmTicket(user, movie, seats);
        });
    });
});