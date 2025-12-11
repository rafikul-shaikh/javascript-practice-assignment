// Q.14) Use setTimeout to print “Ping” every 2 seconds, but stop after 3 times.

let count = 0;

function printPing() {
  count++;
  console.log("Ping");

  if (count < 3) {
    setTimeout(printPing, 2000); // schedule next Ping
  }
}

setTimeout(printPing, 2000); // first call
