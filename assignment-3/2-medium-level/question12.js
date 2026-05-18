// Q.12 Convert Promise.allSettled example into async await with resolved rejected promises

function getProfileData() {
    return new Promise(function(resolve) {

        setTimeout(function() {
            resolve("Profile loaded for Rafikul");
        }, 1000);

    });
}

function getProjectData() {
    return new Promise(function(reject) {

        setTimeout(function() {
            reject("Project loading failed for Rafikul");
        }, 1500);

    });
}

function getSkillsData() {
    return new Promise(function(resolve) {

        setTimeout(function() {
            resolve("Skills fetched for Rafikul");
        }, 1200);

    });
}

async function loadDashboard() {

    const results = await Promise.allSettled([
        getProfileData(),
        getProjectData(),
        getSkillsData()
    ]);

    results.forEach(function(result, index) {

        if (result.status === "fulfilled") {
            console.log("Success:", result.value);
        } else {
            console.log("Error:", result.reason);
        }

    });
}

// Calling the function

loadDashboard();