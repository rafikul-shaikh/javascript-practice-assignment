
// Q.2)Create a function that uses setTimeout to simulate a 3-second delay before logging “Data fetched”.

function fetchData() {
  console.log("Fetching data...");

  setTimeout(() => {
    console.log("Data fetched");
  }, 3000); 
}

fetchData();

