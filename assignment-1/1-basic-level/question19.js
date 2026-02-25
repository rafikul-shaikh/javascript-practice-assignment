// Q.19) Write a function that accepts a name and prints “Hello <name>” after 2 seconds using a callback.
function greet(name, callback) {
    setTimeout(function () {
        callback(name);
    }, 2000); 
}

function sayHello(name) {
    console.log("Hello " + name);
}
greet("Rafikul", sayHello);