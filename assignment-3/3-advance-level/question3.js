// Q.2 Write async function to fetch paginated API data until page equals 5

function fetchPage(page) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({
                page: page,
                data: "Data for page " + page + " for Rafikul"
            });
        }, 1000);
    });
}

async function fetchPaginatedData() {
    let page = 1;

    while (page <= 5) {
        const response = await fetchPage(page);
        console.log("Page:", response.page, "-", response.data);
        page++;
    }

    console.log("All pages fetched for Rafikul");
}

// Calling the function

fetchPaginatedData();