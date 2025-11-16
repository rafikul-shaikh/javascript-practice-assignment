// Q.5) Use setInterval to print “Running…” every second for 5 seconds 
//      and then stop it.

function startRunning() {
  let count = 0;

  const intervalId = setInterval(() => {
    console.log("Running...");
    count++;

    if (count === 5) {
      clearInterval(intervalId);
      console.log("Stopped!");
    }
  }, 1000); 
}

startRunning();
