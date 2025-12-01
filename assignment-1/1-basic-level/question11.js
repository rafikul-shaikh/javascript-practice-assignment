// Q.11) Create a function that prints numbers from 1 to 5 
// with a 1-second delay between each print.

function printNumbersWithDelay() {
  let num = 1;

  function printNext() {
    if (num <= 5) {
      console.log(num);
      num++;

      // delay next number by 1 second
      setTimeout(printNext, 1000);
    }
  }

  printNext();
}

// Call the function
printNumbersWithDelay();
