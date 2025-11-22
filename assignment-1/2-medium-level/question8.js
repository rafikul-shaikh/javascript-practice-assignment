/*
Q.7) Write a program where you simulate fetching weather data for 3 cities
    one after another using nested callbacks. (Use your name in the program)
*/

function fetchWeather(city, userName, callback) {
  console.log(`${userName} started fetching weather for ${city}...`);

  setTimeout(() => {
    console.log(`${userName} received weather data for ${city}`);
    callback(); // move to next city
  }, 1000); 
}

function getWeatherSequentially() {
  const user = "Rafikul"; // your name

  fetchWeather("Kolkata", user, () => {
    fetchWeather("Mumbai", user, () => {
      fetchWeather("Delhi", user, () => {
        console.log(`Weather data fetched for all cities by ${user}.`);
      });
    });
  });
}

getWeatherSequentially();
