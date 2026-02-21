// Q.15) Implement a callback hell example where you print “First”, 
// then “Second”, then “Third”, each after 1 second.

setTimeout(() => {
    console.log("Rafikul - First step towards becoming a developer ");

    setTimeout(() => {
        console.log("Rafikul - Second step: Learning Backend");

        setTimeout(() => {
            console.log("Rafikul - Third step: Becoming a Successful Software Engineer");
        }, 1000);

    }, 1000);

}, 1000);