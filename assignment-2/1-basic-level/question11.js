// Q.11 Implement a Promise that resolves to Data Loaded after simulating an API delaygit statu 

function loadData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Rafikul Data Loaded");
        }, 2000);
    });
}

// Using the Promise

loadData()
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log("Error", error);
    });