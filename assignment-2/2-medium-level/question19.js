// Q.19 Write a Promise without catch and observe unhandled rejection behavior

function testUnhandled() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("Rafikul Something went wrong");
        }, 1000);
    });
}

// Calling without catch

testUnhandled()
    .then(function(result) {
        console.log(result);
    });

// No catch is used here